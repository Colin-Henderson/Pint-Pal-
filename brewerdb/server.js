var express = require("express");
var fetch = require("node-fetch");
var path = require("path");

var app = express();

var port = process.env.PORT || 3000;


app.get('/brewerydb', function (req, res) {
    fetch('https://api.brewerydb.com/v2/?key=609ac568fb188f92b20356f14f8cc008')
        .then(data => {
            res.send(data);
        });
});

// app.use(express.static("public"));

app.use("/public", express.static(path.join(__dirname, "public")));
// asteric is for all get methods that arent specified 
app.get("/",function(req,res){
	var index = path.resolve(__dirname, "public","./index.html")
	res.sendFile(index);
});

app.listen(port, function() {
	console.log("server is starting")
});

console.log(__dirname);