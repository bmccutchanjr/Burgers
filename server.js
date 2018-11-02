// Require the dependencies
const chalk = require("chalk");
const express = require("express");
const handlebars = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");

// Configure Express
const PORT = process.env.PORT || 8080;
const app = express();

// app.use(express.static("/app/public"));
app.use(express.urlencoded ({ extended: true }));
app.use(express.json());

// Configure Express-Handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use (routes);

// Finally, start the server
app.listen (PORT, function ()
{   // log a start-up message...

    console.log(chalk.yellow("=============================="));
    console.log(chalk.blue("Burgers listening on port", PORT));
    console.log(chalk.yellow("=============================="));
});
