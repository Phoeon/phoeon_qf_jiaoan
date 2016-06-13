;(function(){
	postMessage(rgb());
	setTimeout(arguments.callee,1000);
})();

function rgb(){
	return "rgb("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+")";
}