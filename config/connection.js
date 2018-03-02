const mysql = require('mysql');
//const oneCanNeverRemember = require('./keys.js');
console.log("db connection")
var connection;

// Make connection.
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
    
   
});

console.log("db connection at connection.js")
// Export connection to ORM
module.exports = connection};