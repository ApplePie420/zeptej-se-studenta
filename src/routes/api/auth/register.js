import stringHash from "string-hash";
import * as cookie from "cookie";
import { v4 as uuidv4 } from "uuid";
import mysql from 'mysql2';

export const post = async ({body}) => {
    // connect to db
    const connection = mysql.createConnection({
        host: import.meta.env.VITE_DB_HOST,
        user: import.meta.env.VITE_DB_USER,
        password: import.meta.env.VITE_DB_PASSWORD,
        database: import.meta.env.VITE_DB_DATABASE
    });

    // TODO(n3tt): check if this email is already registered

    // add user to database
    const cookieId = uuidv4();
    console.log(body.first_name);
    await connection.promise().query('INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)', [
        body.first_name,
        body.last_name,
        body.email,
        stringHash(body.password),
    ]);

    await connection.promise().query('INSERT INTO cookies (email, cookieId) VALUES (?,?)', [
        body.email,
        cookieId
    ]);

    // set cookie
    const headers = {
        'Set-Cookie': cookie.serialize('session-id', cookieId, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
            sameSite: "strict",
            path: "/"
        })
    };

    return {
        status: 200,
        headers,
        body: {
            message: "Success"
        }
    };
}
