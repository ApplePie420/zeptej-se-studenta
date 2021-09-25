import { initDB } from 'mysql.js';

export function get(req, res) {
	const { db } = initDB();
    console.log("database init");
	db.query(`SELECT * FROM articles;`, (err, results, fields) => {
		if (err) throw err;
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify(results));
	});

}