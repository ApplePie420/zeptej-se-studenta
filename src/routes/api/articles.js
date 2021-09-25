import {initDB} from "../articles/mysql.js"

export async function get(req, res, next) {
    return {
        body: {
            "db": await initDB()
        }
    }
}