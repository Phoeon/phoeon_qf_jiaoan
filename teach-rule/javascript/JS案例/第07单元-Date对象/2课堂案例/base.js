

/**
 * 将指定的对象，指定的属性，过渡到指定的值 <br>
 * obj: 对象类型
 * att： 字符串
 * target： 数字
 */
function move(obj, att, target, speed){
	var speed = speed || 5;
	if(parseFloat(Base.getStyle(obj,att)) > target){
		speed = speed*(-1);
	} 
	
	if(obj.timer) clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		if( Math.abs(parseFloat(Base.getStyle(obj,att)) - target) < Math.abs(speed)){
			clearInterval(obj.timer);
		}
		obj.style[att] = parseFloat(Base.getStyle(obj,att)) + speed + "px";
	}, 30);
}

var Base = {
	getById : function(id){
		return document.getElementById(id);
	},
	getByName : function(name){
		return document.getElementsByName(name)[0];
	},
	getByTag : function(tagname){
		return document.getElementsByTagName(tagname)[0];
	},
	getByClassName : function(classname){
		return document.getElementsByClassName(classname)[0];
	},
	log : function(obj){
		document.title = obj;
	},
	//getStyle(obj, "top");
	getStyle : function(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, false)[attr];
		}
	},
	getChildElements : function(node){
		var nodelist = node.childNodes;
		var reslist = [];
		
		for(var i=0; i<nodelist.length; i++) {
			if(nodelist[i].nodeType == 1){
				reslist.push(nodelist[i]);
			}
		}
		
		return reslist;
	}
};
/**鏃ユ湡宸ュ叿 */
var DateUtil = {
	//鍒ゆ柇涓�釜骞翠唤鏄惁鏄棸骞�
	isLeapYear : function(year){
		if(year%4==0 && year%100!=0 || year%400==0){
			return true;
		} else {
			return false;
		}
	},
	//灏嗘棩鏈熷璞℃寜鐓ф寚瀹氱殑鍒嗛殧绗︽牸寮忓寲鎴愬瓧绗︿覆
	format : function(_date, separator){
		var year = _date.getFullYear();
		var month = (_date.getMonth()+1)>9 ? (_date.getMonth()+1) : "0"+(_date.getMonth()+1);
		var date = _date.getDate()>9 ? _date.getDate() : "0"+_date.getDate();
		return year+separator+month+separator+date;
	},
	//瀛楃涓茶浆鏃ユ湡瀵硅薄
	parse : function(str, separator){
		var arr = str.split(separator);	//鏁扮粍鐨刯oin鏂规硶锛屾寜鐓ф寚瀹氱殑鍒嗛殧绗︼紝灏嗘暟缁勭殑鎵�湁鍏冪礌杩炴帴璧锋潵锛屽彉鎴愬瓧绗︿覆锛�
		var dstr = arr.join("-");
		//杞垚鐩稿簲鐨勬绉掓暟
		var time = Date.parse(dstr);
		//鍒涘缓涓�釜鏃ユ湡瀵硅薄
		var d = new Date(time);
		//淇敼time灞炴�
		//d.setTime(time);
		return d;
	},
	//鑾峰緱鏌愪釜鏈堜唤鐨勫ぉ鏁�
	getMonthLength : function(num){
		switch(num){
			case 1 :
			case 3 : 
			case 5 :
			case 7 :
			case 8 :
			case 10 :
			case 12 : return 31;
			case 2 : return 28;
			case 4 :
			case 6 :
			case 9 :
			case 11 : return 30;
		}
	}, 
	//鑾峰緱涓や釜鏃ユ湡鐩存帴鐩稿樊鐨勫ぉ鏁�
	getDiff : function(date1, date2){
		var time1 = date1.getTime();
		var time2 = date2.getTime();
		return Math.floor(Math.abs(time1-time2)/(1000*60*60*24));
	},
	//鑾峰緱N澶╀互鍚庣殑鏃ユ湡
	getSday : function(n){
		var now = new Date();
		var time = now.getTime();
		time += n*24*3600*1000;
		return new Date(time)
	}
};
