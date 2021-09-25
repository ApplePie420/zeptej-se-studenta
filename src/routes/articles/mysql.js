import mysql from "mysql2";

const con = mysql.createConnection({
    host: 'localhost',
    user: 'js',
    password: '123456',
    database: 'js_learning'
});

export async function initDB() {
    var SQL = "SELECT * FROM articles";
    
    const result = await con.promise().query(SQL);
    return result[0]
}
