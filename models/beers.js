
const orm = require('../config/orm.js');

// Method of calling burger specific ORM.
var beer = {
  
  selectAll: function (cb) {
    orm.selectAll("beerlog", function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, vals, cb) {
   
    orm.insertOne("beerlog", cols, vals, function (res) {
      cb(res);
    });
  },

  updateOne: function (objColVals, condition, cb) {
   
    orm.updateOne("beerlog", objColVals, condition, function (res) {
      cb(res);
    });
  },
}
module.exports = beer;