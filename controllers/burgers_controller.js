// Handle the routes for the application

// Require the dependencies
const burgers = require("../models/burgers.js");
const chalk = require("chalk");
const express = require("express");
const path = require("path");

const router = express.Router();
const app = express();
// express.static("public");
// app.use(express.static("public"));

router
.use (function (request, response, next)
{   // Here for debugging...I couldn't figure out my routes without it because if the route isn't
    // working, the console.log() doesn't execute.  I needed something that would always execute
    // regardless of the routes...
    //
    // Interesting to note that this doesn't always execute either, but that may be because the
    // browser is caching.

    console.log(chalk.blue("router.use"));
    console.log(chalk.blue("requesting file: ", request.url));
    next ();
})
.get("/:folder/:file", function(request, response)
{   // generic route to load static files

    response.sendFile(path.join(__dirname, "../public/" + request.params.folder + "/" + request.params.file))
})
.get("/:what", function(request, response)
{   // generic route to load staic files

    response.sendFile(path.join(__dirname, "../public/" + request.params.what));
})
.get("/", function(request, response)
{   // default route...load the home page

    burgers.select(function(data)
    {   var hbsObject =
        {
            burgers: data
        };

        response.render("index", hbsObject);
    });
})
.post("/api/burgers", function(request, response)
{   // A POST request has been received for the /API route.  This represents a new burger, so insert a
    // burger in the database

    burgers.insert(request.body.data, function(result)
    {
        response.status(200).end();
    })
})
.put("/api/devour/:id", function(request, response)
{   // The "devour" button has been clicked...update the database

    burgers.update(request.params.id, function(result)
    {
        if (result.changedRows == 0)
        {   // If no rows were changed, then the ID must not exist -- and that's a design problem
            // so respond with a status code of 500

            return response.status(500).end();
        }
        else
        {   response.status(200).end();
        }
    })
})
.delete("/api/delete/:id", function(request, response)
{   // The "delete" button has been clicked...update the database

    burgers.delete(request.params.id, function(result)
    {
        if (result.affectedRows == 0)
        {   // If no rows were changed, then the ID must not exist -- and that's a design problem
            // so respond with a status code of 500

            return response.status(500).end();
        }
        else
        {   response.status(200).end();
        }
    })
});

module.exports = router;
