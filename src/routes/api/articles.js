import { initDB } from './mysql.js'

export async function get(req, res, next) {
	return {
		body: {
			db: await initDB()
		}
	};
}
