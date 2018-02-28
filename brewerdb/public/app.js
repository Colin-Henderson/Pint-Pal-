// need to do a fetch to local server and then that is going to fetch to brewery db 
// set up an endpoint on my server 
// send a request to my server to the endpoint in step one 
// that endpoint is going to make a request to brewery Db
// when the server gets a response ffrom brewery db it will respond to the client 
// going to be asynchronyous going to be like mysql queries no res. or res. until brewery db has responded 


$(function() {
	function runQuery(filters) {

  // The AJAX function uses the queryURL and GETS the JSON data associated with it.
  // The data then gets stored in the variable called: "BeerData"
		$.ajax({
			headers: {"Access-Control-Allow-Origin": "*"},
		    url: "/brewerydb",
		    method: "GET"
	  	}).done(function(beerData) {
	  		console.log(beerData)
	  		$("#brewery").html(beerData)
	  		// Look back at omdb HW data and use a for loop to get through the array and then do something with it 
	  		// console.log("")
	  })
	};
  runQuery();  
});



