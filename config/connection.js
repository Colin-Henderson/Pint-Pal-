const mysql = require('mysql');
const oneCanNeverRemember = require('./keys.js');

var connection;

// Make connection.
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'beers_db'
});
}

// Export connection to ORM
module.exports = connection;