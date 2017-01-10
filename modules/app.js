var http = require ('http');
//var module1 = require('./module1');
var module2 = require('./module2');

var server = http.createServer (function (req, res) {
 	// body...

 	res.writeHead(200, {'Content-Type': 'text/plain'});
 	//res.write(module1.mySting);
 	//module1.myFunction();
 	res.write(module2.mySting1);
 	module2.myFunction1();
 	res.end();
 }).listen(2323, function() {
 	// body...
 	console.log('server listening to port 2323');
 });
