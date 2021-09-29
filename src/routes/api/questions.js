import { getQuestions } from './mysql.js';

export async function get() {
	return {
		body: {
			res: await getQuestions()
		}
	};
}
