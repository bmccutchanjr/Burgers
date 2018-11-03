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

    insert: function (cb)
    {   orm.insertOne (function(res)
        {
            cb(res);
        });
    },

    update: function (id, cb)
    {   
console.log(chalk.yellow("burgers.update"));
console.log(chalk.yellow("updating: ", id));
        orm.updateOne (id, function(res)
        {
            cb(res);
        });
    }
}

module.exports = burgers;
