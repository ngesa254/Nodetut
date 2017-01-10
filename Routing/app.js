var http = require ('http');
var server1 = require('./server1');



var server = http.createServer(server1.handleRequests).listen(4242, function () {
	
	console.log('listening to port 4242');
});