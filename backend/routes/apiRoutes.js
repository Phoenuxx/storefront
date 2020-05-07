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

  app.get("/api/:category/", (req, res) => {
    db.Stock.findAll({ where: { category: req.params.category } }).then(function (results) {
      res.json(results);
      console.log("category limit offset")
    });
  })

  app.get("/api/:category/:subcategory", (req, res) => {
    db.Stock.findAll({ where: { category: req.params.category, subcategory: req.params.subcategory } }).then(function (results) {
      res.json(results);
      console.log("category limit offset")
    });
  })

  app.get("/api/:category/:subcategory/:product", (req, res) => {
    db.Stock.findAll({ where: {category: req.params.category, subcategory: req.params.subcategory, product_name: req.params.product } }).then(function (results) {
      res.json(results);
      console.log(req.params.product);
    });
  })
};
