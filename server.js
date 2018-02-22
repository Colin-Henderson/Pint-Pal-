require('dotenv').config();

// Need to put this in whatever file we 
// are connection to our database in 
// const db = require('db')
//   db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// })

/*         John's addition                   */
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const router = require('./controller/beers_controller.js');
const exphbs = require('express-handlebars');

const app = express();
require("./routing/htmlRoutes.js")(app);
const port = process.env.PORT || 3000;

// Manages app's static content from the "public" directory within application directory.
app.use(express.static(process.cwd() + '/public')); 
app.use(bodyParser.urlencoded({ extended: false }));        // Parse app | proper url encode
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/', router); 


app.listen(port, function() {
    console.log("App listening on PORT " + port);  // status 200 check
});