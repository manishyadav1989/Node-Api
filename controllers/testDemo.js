/**
* Test Demo Controller
* Version: 1.0.0 
* @Author: Manish Yadav
* @copyrights and all rights reserved by Demo.com.
**/

var testDemo = (function(){

	var demo = {};

	demo.index = function(req, res){
		//res.end('inside index method');
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify({ a: 1 }));
	}

	demo.testcase = function(req, res){
		//res.end('inside testcase method');
		res.setHeader('Content-Type', 'application/json');
    	res.end(JSON.stringify({ a: 1 }));
	}
	return demo;	
	
})();

module.exports = testDemo;