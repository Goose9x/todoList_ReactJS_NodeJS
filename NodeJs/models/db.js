const mysql = require("mysql2")

let pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "12345678",
    database:"todolist_schema"
})

module.exports = pool.promise()
