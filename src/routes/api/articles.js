import { initDB } from '$lib/mysql.js';

export async function get() {
	return {
		body: {
			db: await initDB()
		}
	};
}
