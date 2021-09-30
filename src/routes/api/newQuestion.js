import { insertQuestionIntoDatabase } from '$lib/mysql.js.js';

export async function post(req) {
	let data = {
		question: req.body.get('question'),
		author: req.body.get('author'),
		email: req.body.get('email')
	};
	let queryResult = insertQuestionIntoDatabase(data);

	return {
		body: {
			success: queryResult
		}
	};
}
