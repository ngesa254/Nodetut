var http = require ('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	// body...

	res.writeHead(200, {'Content-Type': 'text/html'});

	//Read  & Render File
    fs.readFile('./index.html', null, function (err, data) {
    	
    	if (err){


            res.writeHead(404);
    		res.write('There is an error!');
    	} else
    	{

    		res.write(data);
      	}

      	res.end();
    });	
  

}).listen(7373, function () {
	// body...

	console.log('The server listening to port 7373');
});