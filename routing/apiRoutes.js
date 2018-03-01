console.log('API is connected!');  // executing connection check

/*

const beersArray = require('../data/beers.js');

// Get & Post route methods
function apiRoutes(app) {

    // GET route with the url /api/beers. Manages and shows a JSON list of possible beers.
    app.get('/api/beers', (req, res) => {
        res.json(beersArray);
    });

    // POST routes /api/beers. Manages incoming answers & handles the suggestion logic as well.
    app.post('/api/beers', (req, res) => {

        const suggestedBeer = {         // Parse beer entry to get integers for AJAX post converts numbers into strings

            // ================== From Jared's HTML =================  //
            $.post("/api/journal.js", journalEntry, function (data) {


                    //Use this for suggesting beer
                    // $("#match-name").text(data[1].name);
                    // $("#match-img").attr("src", data[1].photo);
                    // // Show the modal with the best match
                    // $("#results-modal").modal("toggle");
                    // console.log(data[1].name + " data[1]")


                    $("#beerName").val(""),  // text input
                        $("#breweryName").val(""),  // text input
                        $("#beerStyle").val("");  // text input
                    $("#abv").val(""); // int input
                    $("#location").val(""); // text input
                    $("#score").val(""); // dropdown int input
                    $("#notes").val(""); // text box for large text input

                });


            
            // ================  End of Jared's HTML ============== //
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };
        const scoresArray = [];
        for (var i = 0; i < req.body.scores.length; i++) {
            scoresArray.push(parseInt(req.body.scores[i]))
        }
        suggestedBeer.scores = scoresArray;


        const matchPointsArray = [];
        for (var i = 0; i < beersArray.length; i++) {

            let existingMatch = 0;            // Check each beer's scores and sum difference in points
            for (let j = 0; j < suggestedBeer.scores.length; j++) {
                existingMatch += Math.abs(suggestedBeer.scores[j] - beersArray[i].scores[j]);
            }

            matchPointsArray.push(existingMatch);             // Push each comparison between beers to array
        }

        let idealMatch = 0;
        for (var i = 1; i < matchPointsArray.length; i++) {

            if (matchPointsArray[i] <= matchPointsArray[idealMatch]) {
                idealMatch = i;
            }
        }

        const theIdealMatch = beersArray[idealMatch];

        res.json(theIdealMatch);               // Reply with a JSON object of the best match

        beersArray.push(suggestedBeer);          // Push the new beer to the beers data array for storage

    });

}

module.exports = apiRoutes;    // Exports to server.js

*/