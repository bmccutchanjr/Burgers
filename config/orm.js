// Require the dependencies
const connection = require("./connection.js");

const orm =
{   selectAll: function(cb)
    {
        var queryString = "select * from burgers;";

        connection.query(queryString, function(error, result)
        {   if (error) throw error;

            cb(result);
        });

        // console.log ("selectAll ()");
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

    // updateOne: function (burgerID)
    // {   query = "delete from burgers where id = ?;";
    
    //     connection.query(query, function(error, result)
    //     {   
    //         if (error) throw error;

    //         cb(result);
    //     })

    // // console.log ("updateOne ()");
    // }
}

module.exports = orm;