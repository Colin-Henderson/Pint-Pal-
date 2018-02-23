// Node Dependencies
const express = require('express');
const router = express.Router();
// const beer = require('../models/beer.js');

// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});

// Index Page (render all beers to DOM)
router.get('/index', function (req, res) {
  beer.selectAll(function(data) {
    var hbsObject = { beers: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// Create a New Beer
router.post('/beer/create', function (req, res) {
  beer.insertOne(req.body.beer_name, function() {
    res.redirect('/index');
  });
});

// Drink a Beer
router.post('/beer/drink/:id', function (req, res) {
  beer.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});

// Export routes
module.exports = router;