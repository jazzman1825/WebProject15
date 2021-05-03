const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root', // your password
    database: 'productdb'
});
module.exports = connection;