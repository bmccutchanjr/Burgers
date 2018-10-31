// Require the dependencies
const orm = require("../config/orm.js");

console.log("burgers");

const burgers =
{   select:  function (cb)
    {   orm.selectAll ();
    },

    insert: function (cb)
    {   orm.insertOne ();
    },

    update: function (cb)
    {   orm.updateOne ();
    }
}

module.exports = burgers;
