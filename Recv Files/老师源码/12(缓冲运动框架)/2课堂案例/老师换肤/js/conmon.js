function $( para , obj){
	var paraP = typeof para;
	paraP = paraP.toLowerCase();
	if( paraP == 'function' ){
		window.onload = para;
	}else if(paraP == 'string'){
		var fPara = para.charAt(0);
		if(fPara == '#'){
			para = para.substring(1);
			return document.getElementById( para );
		}else if(fPara == '.'){
			para = para.substring(1);
			var obj = obj || document;
			if( obj.getElementsByClassName ){
				return obj.getElementsByClassName(para);
			}else{
				var oArr = [];
				var oClass = obj.getElementsByTagName("*")
				for(var i = 0 ; i < oClass.length ; i++){
					var all = oClass[i].className.split(" ");
					for(var j = 0 ; j < all.length ; j++){
						if(all[j] == para){
							oArr.push(oClass[i])
						}
					}
				}
				return oArr;
			}
		}	
	}
}

function getStyle( obj,attr ){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr]
}

//descending sort降序排列
function decline(value1,value2){
	if(value1 > value2){
		return -1;
	} else if(value1 < value2){
		return 1;
	} else {
		return 0;
	}
}
 //sort正序排列后，可用reverse()逆序
function rise(value1,value2){
	return value1 - value2;
}
//获取class名的元素
function getClass(oName ,obj){
	
}

var timer1 = null
function _move(target , speed , obj , attr){
	clearInterval(timer);
	timer1 = setInterval(function(){
		if(parseInt( getStyle(obj,attr) ) == target ){
			clearInterval(timer1);
		}else{
			obj.style[attr] = parseInt( getStyle(obj,attr) ) + speed + 'px';
		}
	} , 30)		
}

//
function move(obj,attr,target,fn){
	var speed = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		if(attr == 'opacity'){
			var iCur = parseInt(getStyle(obj,attr)*100);
		}else{
			var iCur = parseInt(getStyle(obj,attr));
		}
		if(iCur > target){
			speed = Math.floor((target-iCur)/10);
		}else{
			speed = Math.ceil((target-iCur)/10);
		}
		if(iCur == target){
			clearInterval(obj.timer);
			fn();
		}else{
			if(attr == 'opacity'){
				obj.style.filter = 'alpha('+attr+'='+(iCur+speed)+')';
				obj.style[attr] = (iCur+speed)/100;
			}else{
				obj.style[attr] = iCur + speed + 'px';	
			}
		}
	},30);
}

