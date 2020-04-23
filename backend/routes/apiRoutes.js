// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================


// Requiring our model
const db = require("../models");

// Routes 
// =============================================================
module.exports = function (app) {

  app.get("/api/all", (req, res) => {
    db.Stock.findAll({}).then(function (results) {
      res.json(results);
    });
  })
  
  app.get("/api/:category", (req, res) => {
    db.Stock.findAndCountAll({ where: { category: req.params.category }, limit: 1, offset: 0}).then(function (results) {
      res.json(results);
      console.log("category limit offset")
    });
  })

  // An api endpoint that returns a short list of items
  app.get('/api/getList', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
  });
};