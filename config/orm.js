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

    // insertOne: function(burger)
    // {   // Insert a new burger into the database

    //     var query = "insert into burgers (burger_name) values (?);";

    //     connection.query(query, function(error, result)
    //     {   if (error) throw error;

    //         cb(result);
    //     });
    // // console.log ("insetOne ()");
    // },

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