// var authKey = "609ac568fb188f92b20356f14f8cc008";

// // queryURLBase is the start of our API endpoint. 
// // the user hits the search button
// var queryURLBase = "https://api.brewerydb.com/v2/?key=" + authKey;

  // http://api.brewerydb.com/v2/?key=abcdef


// need to do a feth to local server and then that is going to fetch to brewery db 



$(function() {
	function runQuery(filters) {

  // The AJAX function uses the queryURL and GETS the JSON data associated with it.
  // The data then gets stored in the variable called: "BeerData"
		$.ajax({
			headers: {"Access-Control-Allow-Origin": "*"},
		    url: "/brewerydb",
		    method: "GET"
	  	}).done(function(beerData) {
	  		console.log("testing")
	  		// console.log("")
	  })

	};
  runQuery();  
});
// runQuery();  
// look at jquerys examples
// .Get/Post


// set up an endpoint on my server 
// send a request to my server to the endpoint in step one 
// that endpoint is going to make a request to brewery Db
// when the server gets a response ffrom brewery db it will respond to the client 

// going to be asynchronyous going to be like mysql queries no res. or res. until brewery db has responded 