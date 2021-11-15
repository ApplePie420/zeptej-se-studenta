import { getArticle } from '$lib/mysql.js';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {

    const { article } = params;

    console.log(params);
	return {
		body: {
			res: await getArticle(article)
		}
	};
}
