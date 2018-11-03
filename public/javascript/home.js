$(document).ready(function()
{
    $(".devour-burger").click(function(event)
    {   // event handler for DEVOUR buttons
        
        event.preventDefault();

        // When a DEVOUR button is clicked, the page submits a PUT request to the server with the value
        // of the button's data-id attribute

        $.ajax("/api/devour/" + $(this).attr("data-id"),
        {   type: "PUT",
            id:   $(this).attr("data-id")
        })
        .then(function()
        {   
            location.reload();
        })
    })

    $("#burger").change(function(event)
    {   // change event handler for burger input
        
        event.preventDefault();

        // When text is entered into the burger input, a POST request is submitted to the server
        // with the value of the input field.

console.log (event.target);
console.log ($(this).val());
        $.post("/api/burgers" + $(this).val(), function()
        {   
console.log("input a burger");
            location.reload();
        })
    })
});