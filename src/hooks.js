import * as cookie from 'cookie';
import mysql from 'mysql2';

// sets context in endpoints
export const handle = async ({ request, resolve }) => {
	const connection = mysql.createConnection({
		host: import.meta.env.VITE_DB_HOST,
		user: import.meta.env.VITE_DB_USER,
		password: import.meta.env.VITE_DB_PASSWORD,
		database: import.meta.env.VITE_DB_DATABASE
	});

	// get cookies from req ehaders - all requests have cookies on them
	const cookies = cookie.parse(request.headers.cookie || '');
	request.locals.user = cookies;

	// if there are no cookies, user is not authenticated
	if (!cookies.session_id) {
		request.locals.user.authenticated = false;
	}

	// search db for any user with the correct cookie
	var userData = await connection
		.promise()
		.query('SELECT * FROM users WHERE cookieId = ?', [cookies.session_id]);

	// var userData = await connection
	// 	.promise()
	// 	.query('SELECT * FROM users WHERE email = ?', [userSession[0][0].email]);

	userData = userData[0][0];

	// if there is that user, authenticate him and pass the email to the context
	if (userData) {
		request.locals.user.authenticated = true;
		request.locals.user.email = userData.email;
		request.locals.user.name = userData.first_name;
		request.locals.user.moderator = userData.isModerator;
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
					email: request.locals.user.email,
					isModerator: request.locals.user.moderator,
					name: request.locals.user.name
				}
		}
		: {};
};
