import { getArticles } from '$lib/mysql.js';

export async function get() {
	return {
		body: {
			res: await getArticles()
		}
	};
}
