import * as cookie from 'cookie';
import mysql from 'mysql2';

// sets context in endpoints
export const handle = async ({request, resolve}) => {
    const connection = mysql.createConnection({
        host: import.meta.env.VITE_DB_HOST,
        user: import.meta.env.VITE_DB_USER,
        password: import.meta.env.VITE_DB_PASSWORD,
        database: import.meta.env.VITE_DB_DATABASE
    });

    // get cookies from req ehaders - all requests have cookies on them
    const cookies = cookie.parse(request.headers.cookie || "");
    request.locals.user = cookies;

    // if there are no cookies, user is not authenticated
    if(!cookies.session_id) {
        request.locals.user.authenticated = false;
    }

    // search db for any user with the correct cookie
    const userSession = await connection.promise().query("SELECT * FROM cookies WHERE cookieId = ?", [
        cookies.session_id
    ]);

    // if there is that user, authenticate him and pass the email to the context
    if(userSession) {
        request.locals.user.authenticated = true;
        request.locals.user.email = userSession.email;
    } else {
        request.locals.user.authenticated = false;
    }

    const response = await resolve(request);

    return {
        ...response,
        headers: {
            ...response.headers
        }
    };
};

// creates session on client side
export const getSession = async (request) => {
    return request.locals.user 
        ? {
            user: {
                authenticated: true,
                email: request.locals.user.email
            }
        }
        : { };
};