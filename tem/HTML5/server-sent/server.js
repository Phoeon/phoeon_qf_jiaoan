var http = require("http");
http.createServer(function(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader('Content-Type','text/event-stream');
  res.setHeader('Cache-Control','no-cache');
  res.write("data:"+rgb());
  res.end("\n\n\n");
}).listen("3000");

function rgb(){
	return "rgb("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+")";
}