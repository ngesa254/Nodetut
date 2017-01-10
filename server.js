 //Creating a server in Node Js
 
 var http = require ('http');

 var server = http.createServer (function (req, res) {
 	// body...

 	res.writeHead(200, {'Content-Type': 'text/plain'});
 	res.write('There is aweomeness here!');
 	res.end();
 }).listen(9000, function() {
 	// body...
 	console.log('server listening to port 9000');
 });
