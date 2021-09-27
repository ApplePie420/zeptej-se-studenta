// load modules
var mysql = require('mysql2');
var fs = require('fs');
var path = require('path');

// load SQL queries
var T_USERS = fs.readFileSync(path.join(__dirname, 'users.sql')).toString();
var T_ARTICLES = fs.readFileSync(path.join(__dirname, 'articles.sql')).toString();

console.log('Creating connection...');
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	// password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE
});

console.log('Connected. Creating tables...');

connection.query(T_ARTICLES, function (err, result) {
	if (err) throw err;
	console.log(result);
});
console.log('Table created');

connection.query(T_USERS, function (err, result) {
	if (err) throw err;
	console.log(result);
});
console.log('Table created');

console.log('All tables created. Closing connection.');
connection.end();
