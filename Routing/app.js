/*
  Routing
 
  This example code is in the public domain.

  modified 10 Jan 2017
  by Ngesa N Marvin
  
*/



var http = require ('http');
var server1 = require('./server1');



var server = http.createServer(server1.handleRequests).listen(4242, function () {
	
	console.log('listening to port 4242');
});
