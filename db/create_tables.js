// load modules
const mysql = require("mysql2");
require("dotenv").config();

// load SQL queries
var T_USERS = fs.readFileSync('users.sql').toString();
var T_ARTICLES = fs.readFileSync('articles.sql').toString();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.query(T_ARTICLES, function(err, result) {
    if (err) throw err;
    console.log(result);
});

connection.query(T_USERS, function(err, result) {
    if (err) throw err;
    console.log(result);
});