// Require the dependencies
const orm = require("../config/orm.js");
const chalk = require("chalk");

console.log("burgers");

const burgers =
{   select:  function (cb)
    {   orm.selectAll (function(res)
        {
            cb(res);
        });
    },

    insert: function (text, cb)
    {   
console.log(chalk.yellow("burgers.insert()"));
console.log(chalk.yellow("new burger: ", text));
        orm.insertOne (text, function(res)
        {
            cb(res);
        });
    },

    update: function (id, cb)
    {   
        orm.updateOne (id, function(res)
        {
            cb(res);
        });
    }
}

module.exports = burgers;
