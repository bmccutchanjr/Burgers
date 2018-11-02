// require the dependencies
const mysql = require("mysql");

const connection = mysql.createConnection(
{   server:     "localhost",
    port:       3306,
    user:       "root",
    password:   "root",
    database:   "BurgersDB"
});

connection.connect (function (error)
{   // Connect to the MySQL database

    if (error) throw error;

    console.log ("Connected to database as", connection.threadId);
});

module.exports = connection;