/*     Pint Pal | University of Richmond | John Kim     */

require('dotenv').config();
var express = require("express");
var fetch = require("node-fetch");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;
var key = '609ac568fb188f92b20356f14f8cc008';
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var router = require('./controller/beers_controller.js');

app.use(express.static("public"));
// USE Below if Above does not work
// app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false })); 

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Returns a Random Beer
app.get('/random', (req, res) => {
    // console.log("test")
    fetch('https://api.punkapi.com/v2/beers/random')
        .then(data => data.json())
        .then(body => res.send(body));
});

// Below Route was for pairing food but am getting a 404 currently with it 
// _____________________________________
// app.get('/food', (req, res) => {
//     // console.log("test")
//     fetch('https://api.punkapi.com/v2/beers/food')
//         .then(data => data.json())
//         .then(body => res.send(body));
// });
// Need use var= input in here from app.js
// This one is returning the search key of Gose beer 
app.get('/brewerydb', (req, res) => {
    // console.log("test")
    fetch('https://api.brewerydb.com/v2/search?key=' + key + '&q=Gose&type=beer')
        .then(data => data.json())
        .then(body => res.send(body));
});

// Not sure why this is not working 
app.get('/search/:type', (req, res) => {
    console.log(req.params.type);
    fetch('https://api.brewerydb.com/v2/search?key=' + key + '&q=' + req.query.user_search + '&type=' + req.params.type)
        .then(data => data.json())
        .then(body => res.send(body));
});

// Should return geo location (need to get this one more specific)
app.get('/geo/:lat/:lng', (req, res) => {
    console.log(req.params.lat)
    console.log(req.params.lng)
    fetch('https://api.brewerydb.com/v2/search?key=' + key + '&q=geo/point?lat=40.5407&lng=40.4360')
        .then(data => data.json())
        .then(body => res.send(body));
});


app.use("/", router); 
//app.use(router);
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

console.log(__dirname);

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
