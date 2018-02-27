// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
   

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newjournalEntry = {
            name: $("#beerName").val().trim(),
           
        };

        // Send the POST request.
        $.ajax("/api/beers", {
            type: "POST",
            data: newjournalEntry
        }).then(
            function () {
                console.log("created new journalEntry");
                // Reload the page to get the updated list
                location.reload();
            }
            );
    });


});
