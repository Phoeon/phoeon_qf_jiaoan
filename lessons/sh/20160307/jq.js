function jq(selector){
	  var instance = [];//instance  <--> new Array
	  
	  var doms = document.querySelectorAll(selector);
	  
	  for(var i=0;i<doms.length;i++)instance.push(doms[i]);
	  
	  instance.__proto__ = jq.prototype ;

	  return instance;
	}	


	jq.fn = jq.prototype = {
        get : function(i){
        	return this[i];
        },
        css : function(key,value){
           for(var i=0;i<this.length;i++){
           	  this[i].style[key] = value ;
           }
        },
        click : function(fn){
        	for(var i=0;i<this.length;i++){
        	  this[i].onclick = fn;
           	  // this[i].style[key] = value ;
           }	
        }
        ,addClass : function(cName){
        	for(var i=0;i<this.length;i++){
        		if(this[i].className.indexOf(cName)==-1)
        		this[i].className += " "+cName;
        	}
        },
        removeClass : function(cName){
        	for(var i=0;i<this.length;i++){
        		var reg= new RegExp("\\s*"+cName+"\\s*");
        		var result = this[i].className.replace(reg," ");
        		this[i].className = result;
        	}
        },
        html : function(htmlStr){
        	if(htmlStr){
        		for(var i=0;i<this.length;i++){
        			this[i].innerHTML = htmlStr;
        		}
        	}else  return this[0].innerHTML;
        },
        text : function(text){
        	if(text){
        		for(var i=0;i<this.length;i++){
        			this[i].innerText = text;
        		}
        	}else  {
        		var result = "";
        		for(var i=0;i<this.length;i++){
        			result +=this[i].innerHTML;
        		}
        		return result;
        	}
        },
        val : function(value){
        	if(value){
        		for(var i=0;i<this.length;i++){
        			this[i].value = value;
        		}
        	}else return this[0].value;
        }

        ,
        each : function(fn){
        	for(var i=0;i<this.length;i++){
        		fn(i,this[i],this,"fy");
        	}
        }

	}