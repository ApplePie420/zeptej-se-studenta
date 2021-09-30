import { getQuestions } from '$lib/mysql.js';

export async function get() {
	return {
		body: {
			res: await getQuestions()
		}
	};
}
