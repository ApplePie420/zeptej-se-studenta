import mysql from 'mysql2';

const con = mysql.createConnection({
    host: import.meta.env.VITE_DB_HOST,
    user: import.meta.env.VITE_DB_USER,
    password: import.meta.env.VITE_DB_PASSWORD,
    database: import.meta.env.VITE_DB_DATABASE
});

export async function initDB() {
	var SQL = 'SELECT * FROM articles';

	const result = await con.promise().query(SQL);
	return result[0];
}
