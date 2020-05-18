// Requiring our model
const db = require("../models");

var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = function (app) {

  app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function (err, hash) {
      db.user.create({
        username: username,
        password: hash
      }).then((result) => {
        console.log("User created: ", result);
        res.json("user created!");
      })
    });
  });

  app.post('/log-in', (req, res) => {
    const { username, password } = req.body;
    console.log("User submitted: ", username, password);

    db.user.findOne(
      {
        where: { username: username }
      })
      .then((user) => {
        console.log("User Found: ", user);
        if (user === null) {
          res.json(false);
        }
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            console.log("Valid!");
            let token = jwt.sign({ username: user.username }, 'phoenix flies high at night', { expiresIn: 129600 }); // Signing the token
            res.json({
              sucess: true,
              err: null,
              token
            });
          }
          else {
            console.log("Entered Password and Hash do not match!");
            res.status(401).json({
              sucess: false,
              token: null,
              err: 'Entered Password and Hash do not match!'
            });
          }
        });
      })
  });
};