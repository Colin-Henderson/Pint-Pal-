// Import Node Dependencies
var connection = require('./connection.js');
console.log("ORM Connection at ORM.js");
// Connect to MySQL database


// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   };
//   console.log('connected as id ' + connection.threadId);
// });


<<<<<<< HEAD
=======
    // Run MySQL Query
    connection.query('SELECT * FROM beerlog', function (err, result) {
      if (err) throw err;
      callback(result);
    });
>>>>>>> f8aa74828711978ad34553c99bc5f3ad1f5a1d4c

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}


// Methods for MySQL commands
var orm = {

  // selectAll()
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
<<<<<<< HEAD
      cb(result);
=======
    timestamp += second;
    // ----------------------------------------------------------

    // Run MySQL Query
    connection.query('INSERT INTO beerlog SET ?', {
      beer_Name: beer_Name,
      brand_Name: brand_Name,
      state_Abbrev: state_Abbrev,
      beer_Style: beer_Style,
      abv: abv,
      rating: rating,
      date: timestamp
    }, function (err, result) {
      if (err) throw err;
      callback(result);
>>>>>>> f8aa74828711978ad34553c99bc5f3ad1f5a1d4c
    });
  },

  // insertOne()
  insertOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

<<<<<<< HEAD
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
=======
    // Run MySQL Query  (think devoured = requesting a suggestion)
    connection.query('UPDATE beerlog SET ? WHERE ?', [{suggestion: true}, {id: beerID}], function (err, result) {
        if (err) throw err;
        callback(result);
      });
>>>>>>> f8aa74828711978ad34553c99bc5f3ad1f5a1d4c

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // updateOne()
  updateOne: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
}
module.exports = orm;