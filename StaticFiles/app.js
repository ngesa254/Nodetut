var express = require ("express");
var app = express();

//Requests

app.get("/", function (req, res) {

res.send("Yowza! I am an expret in this now!");

});

app.get("/bye", function (req, res) {
	
	res.send("Goodbye!");
});


//Create a server
var server = app.listen (1212, function () {
	
	console.log("server now listenig to port 1212");

});