// need to do a fetch to local server and then that is going to fetch to brewery db 
// set up an endpoint on my server 
// send a request to my server to the endpoint in step one 
// that endpoint is going to make a request to brewery Db
// when the server gets a response ffrom brewery db it will respond to the client 
// going to be asynchronyous going to be like mysql queries no res. or res. until brewery db has responded 
// $(function () {
//     function runQuery(filters) {
//         // The AJAX function uses the queryURL and GETS the JSON data associated with it.
//         // The data then gets stored in the variable called: "BeerData"
//         $.ajax({
//             headers: {
//                 "Access-Control-Allow-Origin": "*"
//             },
//             url: "/brewerydb",
//             method: "GET"
//         }).done(function (beerData) {
//             var beer = beerData;
//             console.log(beerData);
//             document.getElementById("brewery").innerHTML = beer;
//             // $("#brewery").html(beerData);
//             // Look back at omdb HW data and use a for loop to get through the array and then do something with it 
//             // console.log("")
//         })
//     };
//     runQuery();
// });
// NEED TO EXECUTE THIS ON CLICK OF RANDOM BUTTON
// Should be importing a rondom beers information into the #random div 
// $('#searchDescrip').click(
$(function() {
   function randBeer(filters) {
        $.ajax({
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            url: "/random",
            method: "GET"
        }).done(function (beerData) {
            var beer = beerData[0];
            console.log(beerData);
            JSON.stringify(document.getElementById("randomDescrip").innerHTML = "Thanks for using Brewgle! Your random beer of the day is called " + beer.name + ". " + beer.name + " summarized: " + beer.description);
            console.log("test");
        })
    };
 // $('#searchDescrip').click(function(){
 //    // event.preventDefault();
 //    console.log("Hi") 
 randBeer();  
});
 // });// randBeer();

// For linking the search feature to brewery db need to get the input to be used in server.js 
// var beersOnPage = 0 


// function userSearch() {
    // console.log("super connected");
// };

// $(function () {

//     function searchBeer(filters) {
//          var input = document.getElementById("userInput").value;
//         console.log(input);
//         $.ajax({
//             headers: {
//                 "Access-Control-Allow-Origin": "*"
//             },
//             url: "/search/beer?user_search=" + input,
//             method: "GET"
//         }).done(function (beerData) {
//             var beer = beerData;
//             console.log(beerData);
//             JSON.stringify(document.getElementById("searchDescrip").innerHTML = beer.name);
//         })
//     };
//    // $('#form input[type="submit"]').on("click", searchBeer);
//    // searchBeer();
// });


// console.log("it worked").on("click")
// You will probably have a "/search" endpoint on your server, then when the use clicks search you would make an ajax GET request to your server. You would use the url.query to get the value.

// Something along these lines:
// (from client)
// ajax.get("/search?user_search=" + input)

// (on server)
// app.get("/search", (req, res) => {
//     console.log(req.query.user_search);
// })




