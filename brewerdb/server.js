var express = require("express");
var fetch = require("node-fetch");
var path = require("path");

var app = express();

var port = process.env.PORT || 3000;
var key = '609ac568fb188f92b20356f14f8cc008';

app.use(express.static("public"));

// Returns a Random Beer
app.get('/random', function (req, res) {
	// console.log("test")
    fetch('https://api.punkapi.com/v2/beers/random')
	.then(data => data.json())
	.then(body => res.send(body));
});

// This one is returning the search key of Gose beer 
app.get('/brewerydb', function (req, res) {
	// console.log("test")
    fetch('https://api.brewerydb.com/v2/search?key=' + key + '&q=Gose&type=beer')
	.then(data => data.json())
	.then(body => res.send(body));
});
// Should return geo location (need to get this one more specific)
app.get('/geo/:lat/:lng', function (req, res) {
	console.log(req.params.lat)
	console.log(req.params.lng)
    fetch('https://api.brewerydb.com/v2/search?key=' + key + '&q=geo/point?lat=40.5407&lng=40.4360')
	.then(data => data.json())
	.then(body => res.send(body));
});

// app.use(express.static("public"));

// asteric is for all get methods that arent specified 
app.get("/",function(req,res) {
	res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, function() {
	console.log("server is starting")
});

console.log(__dirname);

