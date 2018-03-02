
$(document).ready(function () {
    
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$("#submit-button").click(function (event) {
    event.preventDefault();

    var journalEntry = {
        beerName: $("#beerName").val(),
        breweryName: $("#breweryName").val(),
        beerStyle: $("#beerStyle").val(),
        abv: $("#abv").val(),
        location: $("#location").val(),
        score: $("#score").val(),
        notes: $("#notes").val()
    };

    console.log(journalEntry);

    

    //Use this for suggesting beer
    // $("#match-beer").text(data[1].beerName);
    // $("#match-brewery").text(data[1].breweryName);
    // $("#match-syle").text(data[1].beerStyle);
    // $("#match-abv").text(dta[1].abv);
    // $("#match-location").text(data[1].location);
    // $("#match-notes").text(data[1].notes);
    // no score here. We wouldn't suggest a beer with a bad score
    // // Show the modal with the best match
    // $("#results-modal").modal("toggle");
    // console.log(data[1].name + " data[1]")

    $.ajax({
        type: "POST",
        url: "/api/beers",
        data: journalEntry
        

    }).done(function(){
        console.log("Ajax")
                console.log("created new journalEntry");
                $("#beerName").val("");  // text input
                $("#breweryName").val("");  // text input
                $("#beerStyle").val("");  // text input
                $("#abv").val(""); // int input
                $("#location").val(""); // text input
                $("#score").val(""); // dropdown int input
                $("#notes").val(""); // text box for large text input
        })

    });



    console.log("ready!");
});