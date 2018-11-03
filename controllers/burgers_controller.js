// Require the dependencies
const burgers = require("../models/burgers.js");
const chalk = require("chalk");
const express = require("express");
const path = require("path");

const router = express.Router();
const app = express();
// app.use(express.static("../public"));

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

// console.log(chalk.blue("requesting: ", "/", request.params.folder, "/", request.params.file));
    // response.sendFile(path.join(__dirname, "/" + request.params.folder + "/" + request.params.file))
    response.sendFile(path.join(__dirname, "../public/" + request.params.folder + "/" + request.params.file))
console.log(chalk.green("success"));
})
.get("/:what", function(request, response)
{   // generic route to load staic files

// console.log(chalk.blue("requesting: favicon.ico"));
    // response.sendFile(path.join(__dirname, "favicon.ico"));
    response.sendFile(path.join(__dirname, "../public/" + request.params.what));
console.log(chalk.green("success"));
})
.get("/", function(request, response)
{   // default route...load the home page

    burgers.select(function(data)
    {   var hbsObject =
        {
            burgers: data
        };
// console.log(hbsObject);
        response.render("index", hbsObject);
    });
})
.post("/api/burgers", function(request, response)
{   // A POST request has been received for the /API route.  This represents a new burger, so insert a
    // burger in the database
console.log(chalk.yellow("post: ", request.body.data));
    burgers.insert(request.body.data, function(result)
    {
        // if (result.changedRows == 0)
        // {   // If no rows were changed, then the insert failed -- return status 500

        //     return response.status(500).end();
        // }
        // else
        {   response.status(200).end();
        }
    })
})
.put("/api/devour/:id", function(request, response)
{   // The "devour" button has been clicked...update the database

    burgers.update(request.params.id, function(result)
    {
        if (result.changedRows == 0)
        {   // If no rows were changed, then the ID must not exist, so 404

            return response.status(404).end();
        }
        else
        {   response.status(200).end();
        }
    })
});

module.exports = router;
