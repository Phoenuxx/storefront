// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our model
var db = require("../models");



// Routes
// =============================================================
module.exports = function(app) {

app.get("/api/posts/", function(req, res) {
    db.Stock.findAll({})
      .then(function(dbStock) {
        res.json(dbStock);
      });
  });


};