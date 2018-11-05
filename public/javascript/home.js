function statusMessage (text)
{   // Display a message to the user whenever a status message other than "success" is received from
    // the server.

    var statusMessage = $(".status-message");
    statusMessage.empty();

    var pOne = $("<p>");
    pOne.text ("The server has responded with status message:");

    var pTwo = $("<p>");
    pTwo.text (text);

    var button = $("<button>");
    button
    .addClass("status-button")
    .attr("action", "close")
    .text("CLOSE");

    statusMessage
    .append (pOne)
    .append (pTwo)
    .append (button);

    $(".status-wrapper")
    .css("opacity", 0.0)
    .css("display", "block")
    .animate({ opacity: 1.0 }, 1000);    
}

$(document).ready(function()
{   // The page is loaded and ready for user interaction...

    $(".burger-button").click(function(event)
    {   // event handler for DEVOUR buttons
        
        event.preventDefault();

        // When a button with class .burger-button is clicked, the page submits either a PUT request
        // (to update the burger) or a DELETE request (to delete a "devoured" burger from the database)
        // to the server with the value of the button's data-id attribute

        if ($(this).attr("action") === "devour")
        {   $.ajax("/api/devour/" + $(this).attr("data-id"),
            {   type: "PUT",
                id:   $(this).attr("data-id")
            })
            .then(function(_, statusText)
            {   if (statusText != "success")
                {   statusMessage (statusText)
                }
                else
                    location.reload();
            })
        }
        else
        if ($(this).attr("action") === "delete")
        {   $.ajax("/api/delete/" + $(this).attr("data-id"),
            {   type: "DELETE",
                id:   $(this).attr("data-id")
            })
            .then(function(_, statusText)
            {   if (statusText != "success")
                {   statusMessage (statusText)
                }
                else
                    location.reload();
            })
        }
    })

    $("#burger").change(function(event)
    {   // change event handler for burger input
        
        event.preventDefault();

        // When text is entered into the burger input, a POST request is submitted to the server
        // with the value of the input field.

        var data = { "data": $(this).val() };

        $.post("/api/burgers/", data, function()
        {   
            location.reload();
        })
    });

    $(".status-message").on("click", ".status-button", function(event)
    {   event.preventDefault ();

        if ($(this).attr("action") === "close")
        {   // the close button was clicked.
            $(".status-wrapper").css("display", "none");
        }
    });
});