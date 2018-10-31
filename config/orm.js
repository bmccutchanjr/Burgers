// Require the dependencies
const orm = require("./connection.js");

function selectAll ()
{
    console.log ("selectAll ()");
};

function insertOne ()
{
    console.log ("insertOne ()");
};

function updateOne ()
{
    console.log ("updateOne ()");
};

module.exports = 
{   selectAll,
    insertOne,
    updateOne
}