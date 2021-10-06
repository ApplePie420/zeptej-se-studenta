import mysql from 'mysql2';

const con = mysql.createConnection({
	host: import.meta.env.VITE_DB_HOST,
	user: import.meta.env.VITE_DB_USER,
	password: import.meta.env.VITE_DB_PASSWORD,
	database: import.meta.env.VITE_DB_DATABASE
});

export async function createConnection() {
	var con = mysql.createConnection({
		host: import.meta.env.VITE_DB_HOST,
		user: import.meta.env.VITE_DB_USER,
		password: import.meta.env.VITE_DB_PASSWORD,
		database: import.meta.env.VITE_DB_DATABASE
	});

	return con;
}

export async function initDB() {
	var SQL = 'SELECT * FROM articles';

	const result = await con.promise().query(SQL);
	return result[0];
}

export async function insertQuestionIntoDatabase(data) {
	let date = new Date();

	var result = await con
		.promise()
		.query('INSERT INTO questions (question, author, email, created_at) VALUES (?,?,?,?)', [
			data.question,
			data.author,
			data.email,
			date
		]);

	return result;
}

export async function getQuestions() {
	var SQL = 'SELECT * FROM questions LEFT JOIN answers ON answers.questionID = questions.ID';

	const result = await con.promise().query(SQL);
	return result[0];
}

export async function answerQuestion(data) {
	let date = new Date();

	var result = await con
		.promise()
		.query('INSERT INTO answers (answer, author, created_at, questionID) values (?,?,?,?)', [
			data.answerText,
			data.author,
			date,
			data.ID
		]);
	return result[0];
}
