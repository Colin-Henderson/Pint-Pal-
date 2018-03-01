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


const port = process.env.PORT || 3000;
const app = express();
//require("./routing/htmlRoutes.js")(app);

// Manages app's static content from the "public" directory within application directory.
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));        // Parse app | proper url encode


const exphbs = require('express-handlebars');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//console.log(router)

const router = require('./controller/beers_controller.js');

app.use("/", router); 
//app.use(router);

app.listen(port, function() {
    console.log("App listening on PORT " + port + "Server.js");  // status 200 check
});




// var express = require("express");
// var bodyParser = require("body-parser");

// var PORT = process.env.PORT || 3000;

// var app = express();

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());

// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/catsController.js");

// app.use(routes);

// app.listen(PORT, function () {
//     console.log("App now listening at localhost:" + PORT);
// });
