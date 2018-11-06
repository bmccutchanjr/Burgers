// Just one more layer of abstraction that makes the application unnecessarilly complex and unweildy.  I
// can actually envisiona a useful purpose for ORM, but why are there two more layers?

// require the dependencies
const chalk = require("chalk");
const connection = require("./connection.js");

const orm =
{   selectAll: function(cb)
    {
        var queryString = "select * from Burgers;";

        connection.query(queryString, function(error, result)
        {   if (error) throw error;

            cb(result);
        });
    },

    insertOne: function(burgerText, cb)
    {   // Insert a new burger into the database

        var query = "insert into Burgers (burger_name) values (?);";

        connection.query(query, burgerText, function(error, result)
        {   if (error) throw error;

            cb(result);
        });
    },

    updateOne: function (burgerID, cb)
    {   
        query = "update Burgers set devoured = true where id = ?;";
    
        connection.query(query, burgerID, function(error, result)
        {   
            if (error) throw error;

            cb(result);
        })
    },

    deleteOne: function (burgerID, cb)
    {           
        query = "delete from Burgers where id = ?;";
    
        connection.query(query, burgerID, function(error, result)
        {   
            if (error) throw error;

            cb(result);
        })
    }
}

module.exports = orm;