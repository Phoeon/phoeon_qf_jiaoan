var http = require("http");
var path = require("path");
http.createServer(function(req,res){
	console.log(path.resolve(req))
	res.end("adfdsa")
}).listen(8079);