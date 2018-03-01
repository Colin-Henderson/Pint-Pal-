var path = require("path");
// app is from the server.js file 
module.exports = function(app){
	app.get("/", function(req, res) {
		var index = path.resolve(__dirname,  '../public/home.html');
      	res.render(index);
	});
};