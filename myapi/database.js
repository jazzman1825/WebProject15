const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'userdb'
});
module.exports = connection;