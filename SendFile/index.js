
/Importing required modules

var express = require ("express");
var app = express();

//Creating requests

app.get("/", function (req, res) {

	//res.send('Hello Ninja!');
	res.sendFile(__dirname +'/index.html');

	
});


//Creating the server
app.listen(2222, function () {
	
	console.log("server is now listening to port: 2222");
});
