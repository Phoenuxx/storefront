const express = require("express");
const path = require('path');
const db = require('./models');



//seet up express
const app = express();

//Variable port  w/ default 8080
var PORT = process.env.PORT || 8080;

// Static directory to be served
app.use(express.static(path.join(__dirname, 'client/build')));

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
require("./routes/apiRoutes")(app);
//HTML 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../../client/public/index.html'));
  });

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});
  });
  