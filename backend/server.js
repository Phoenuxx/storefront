const express = require("express");
const path = require('path');
const db = require('./models');

// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');


const exjwt = require('express-jwt');


//seet up express
const app = express();

//Variable port  w/ default 8080
var PORT = process.env.PORT || 8080;

// Static directory to be served
  app.use(express.static(path.join(__dirname, 'client/build')));


//Servers secret
const jwtMW = exjwt({
  secret: 'phoenix flies high at night'
});

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', jwtMW /* Using the express jwt MW here */, (req, res) => {
  console.log("Web Token Checked.")
  res.send('You are authenticated'); //Sending some response when authenticated
});

//server should expect authorization headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});


//Routes
require("./routes/apiRoutes")(app);
require("./routes/accountRoutes")(app);

//HTML 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../../client/public/index.html'));
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
