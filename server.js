require('dotenv').config();

// Need to put this in whatever file we 
// are connection to our database in 
const db = require('db')
  db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})