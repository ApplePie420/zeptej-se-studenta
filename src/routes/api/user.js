import mysql from 'mysql2';

export const get = async (context) => {
    const connection = mysql.createConnection({
        host: import.meta.env.VITE_DB_HOST,
        user: import.meta.env.VITE_DB_USER,
        password: import.meta.env.VITE_DB_PASSWORD,
        database: import.meta.env.VITE_DB_DATABASE
    });

    // checking for auth coming from hooks' handle
    if(!context.locals.user.authenticated) {
        return {
            status: 401,
            body: {
                "message": "unauthorized"
            }
        };
    }

    var user = await connection.promise().query("SELECT * FROM users WHERE email = ?", [
        context.locals.user.email
    ]);

    user = user[0][0];

    if(!user) {
        return {
            status: 404,
            body: {
                "message": "User not found"
            }
        };
    }

    delete user.password;

    connection.end();

    return {
        status: 200,
        body: user
    };
};