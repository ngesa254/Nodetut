
var url = require ('url');
var fs = require ('fs');

function renderHTML (path, res) {

	//Read  & Render File
    fs.readFile('path', null, function (err, data) {
    	
    	if (err){
    		
            res.writeHead(404);
    		res.write('There is an error!');
    	} else
    	{

    		res.write(data);
      	}

      	res.end();
    });	
  
}
module.exports = {

handleRequests: function (req, res) {
	
	res.writeHead(200, {'Content-Type': 'text/html'});
     var path = url.parse(req.url).pathname;

     switch (path){
     	case '/':
     	renderHTML('./index.html', res);
     	break;

     	case '/login':
     	renderHTML('./login.html', res);
     	break;

     	default:
     	res.writeHead(404);
     	res.write('Path not defined!');
     	res.end();

     }
}

};