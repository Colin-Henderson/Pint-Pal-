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
    root: 3000,
    user: 'root',
    password: 'AMdbs007ci',
    database: 'schema'

    /*
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'beers_db'
    */
   
});
}

// Export connection to ORM
module.exports = connection;