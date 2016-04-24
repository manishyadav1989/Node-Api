/**
* Nodejs Application Configuration
* Version: 1.0.0 
* @Author: Manish Yadav
* @copyrights and all rights reserved by Demo.com.
**/

// handle when server started
var handleSuccess = function(request, response){
	try{
		// require route manage module
		var route = require('./config/route');
		route.init(request, response); // init route base on urls
	}
	catch (exception){
		console.log('error :'+JSON.stringify(exception));
	}
}

// handle when server through error
var handleError = function(e){
	console.log('Error raised when create server '+e);
}

var server = require('http').createServer(handleSuccess),
	config = require('./config/config');

// listen server
server.listen(config.port);
// error handler
server.on('error', handleError);