import { answerQuestion } from '$lib/mysql';

export async function post(req) {
	let data = {
		answerText: req.body.get('answerText'),
		author: req.body.get('author'),
		ID: req.body.get('questionID')
	};
	let queryResult = answerQuestion(data);

	return {
		body: {
			success: queryResult
		}
	};
}
