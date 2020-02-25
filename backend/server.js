var express = require("express");


var app = express();

//Variable port  w/ default 8080
var PORT = process.env.PORT || 8080;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes for html pages
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

//server page request listener
app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});  
