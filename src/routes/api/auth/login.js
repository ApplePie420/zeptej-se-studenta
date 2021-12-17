import stringHash from 'string-hash';
import * as cookie from 'cookie';
import { v4 as uuidv4 } from 'uuid';
import mysql from 'mysql2';

export const post = async ({ body }) => {
	const connection = mysql.createConnection({
		host: import.meta.env.VITE_DB_HOST,
		user: import.meta.env.VITE_DB_USER,
		password: import.meta.env.VITE_DB_PASSWORD,
		database: import.meta.env.VITE_DB_DATABASE
	});

	const user = await connection
		.promise()
		.query('SELECT * FROM users WHERE email = ?', [body.email]);

	const userP = user[0][0];
	// console.log(userP.password);
	// console.log(stringHash(body.password));

	if (!userP) {
		return {
			status: 401,
			body: {
				message: 'Incorrect email or password'
			}
		};
	}

	if (userP.password != stringHash(body.password)) {
		return {
			status: 401,
			body: {
				message: 'unauthorized'
			}
		};
	}

	const cookieId = uuidv4();

	// look for existing user to avoid duplicates
	const duplicateUser = await connection
		.promise()
		.query('SELECT * FROM cookies WHERE email= ?', [body.email]);

	// if there is an user with cookies, update the cookies, otherwise, create new cookie db entry
	if (duplicateUser) {
		await connection
			.promise()
			.query('UPDATE cookies SET cookieId = ? WHERE email = ?', [cookieId, body.email]);
	} else {
		await connection
			.promise()
			.query('INSERT INTO cookies (email, cookie) VALUES (?,?)', [body.email, cookieId]);
	}

	// set cookie
	const headers = {
		'Set-Cookie': cookie.serialize('session_id', cookieId, {
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 7,
			sameSite: 'strict',
			path: '/'
		})
	};

    connection.end();

    return {
        status: 200,
        headers,
        body: {
            message: 'Success'
        }
    };
}
