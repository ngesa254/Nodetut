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

// routes will go here
/*

app.get('/profile', function (req, res) {
	// body...

	var prof_id = req.param('id');

	res.send('Yowza! You have requested to see the profile with the id of' + prof_id);
});
*/

app.get('/profile/: id', function (req, res) {
	// body...
	res.send('Yowza! You have requested to see the profile with the id of' + req.params.id);
});

app.listen(2000);