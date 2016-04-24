/**
* Manage Application Route
* Version: 1.0.0 
* @Author: Manish Yadav
* @copyrights and all rights reserved by Demo.com.
**/
var routeManager = (function(){
	// define route object
	var  route = {};
	// Manage application route
	route.init = function(request, response){
		// get url from requests
		var url = request.url;
		// check url
		if(url != '/favicon.ico' &&  url != '/' &&  url  != ''){
			// split url with forword slash
			var arg = url.split('/');
			// check argument in array for call controller and his method
			if( arg.length > 2 && arg[2] != ''){
				try{
					// require contrller from controllers
					var controller = require('../controllers/'+arg[1]);
					var model = arg[2]; // get method name from array
					controller[model](request, response); // call controller function
				}
			  	catch(exception) {
			  		response.end('controller could not found');
			  	}					
			}
			else{
				try{
					// require contrller from controllers
					var controller = require('../controllers/'+arg[1]);
					controller.index(request, response); // call default function index
				}
				catch(exception) {
					response.end('controller could not found');
				}
			}	
		}
		else{
			response.end('invalid url');
		}
	}
	// return object
	return route;	
})();

module.exports = routeManager;