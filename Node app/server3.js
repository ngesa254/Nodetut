 var http = require ('http');


 var server = http.createServer (function (req, res) {
 	// body...

 	res.writeHead(200, {'Content-Type': 'text/plain'});
 	res.write('Meet the most awesome webpage is here!');
 	res.end();
 }).listen(9000, function() {
 	// body...
 	console.log('server listening to port 9000');
 });
