import { initDB } from './mysql.js';

export async function get() {
	return {
		body: {
			db: await initDB()
		}
	};
}
