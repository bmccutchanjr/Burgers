// Require the dependencies
const orm = require("../config/orm.js");

console.log("burgers");

const burgers =
{   select:  function (cb)
    {   orm.selectAll (function(res)
        {
        cb(res);
        });
    },

    insert: function (cb)
    {   orm.insertOne ();
    },

    update: function (cb)
    {   orm.updateOne ();
    }
}

module.exports = burgers;
// var all = function(cb)
// {
//     orm.selectAll (function(res)
//     {
//       cb(res);
//     });
// };

// all(function(data)
// {
//     var hbsObject =
//     {
//       cats: data
//     };
//     console.log(hbsObject);
//     // res.render("index", hbsObject);
// });
