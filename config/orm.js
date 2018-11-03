// Require the dependencies
const chalk = require("chalk");
const connection = require("./connection.js");

const orm =
{   selectAll: function(cb)
    {
console.log (chalk.yellow("selectAll ()"));
        var queryString = "select * from burgers;";

        connection.query(queryString, function(error, result)
        {   if (error) throw error;

            cb(result);
        });
    },

    insertOne: function(burgerText, cb)
    {   // Insert a new burger into the database
console.log ("insetOne ()");
console.log ("burger: ", burgerText);
        var query = "insert into burgers (burger_name) values (?);";

        connection.query(query, burgerText, function(error, result)
        {   if (error) throw error;

            cb(result);
        });
    },

    updateOne: function (burgerID, cb)
    {   
console.log (chalk.yellow("updateOne ()"));
console.log (chalk.yellow("burgerID: ", burgerID));
        
        query = "update burgers set devoured = true where id = ?;";
    
        connection.query(query, burgerID, function(error, result)
        {   
            if (error) throw error;

            cb(result);
        })
    },
}

module.exports = orm;