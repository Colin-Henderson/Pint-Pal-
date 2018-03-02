
const orm = require('../config/orm.js');

// Method of calling burger specific ORM.
const beer = {

  selectAll: function(callback){
    orm.selectAll(function(res){
      callback(res);
    });
  },

  insertOne: function(beer_name, callback){
    orm.insertOne(beer_name, function(res){
      callback(res);
    });
  },

  updateOne: function(beer_id, callback){
    orm.updateOne(beer_id, function(res){
      callback(res);
    });
  }
};

module.exports = beer;