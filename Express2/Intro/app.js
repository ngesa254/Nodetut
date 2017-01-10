var express = require ('express');

var app = express();

app.get('/', function (req, res) {
	// body...

	res.send('Yowza! This is the home page!');

});


app.get('/contact', function (req, res) {
	// body...

	res.send('Yoh gang! This is the contact page!');

});

app.listen(2000);