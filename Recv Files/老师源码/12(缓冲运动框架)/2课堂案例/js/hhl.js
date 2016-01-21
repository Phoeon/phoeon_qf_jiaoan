function $(para, obj) {
	var typeP = typeof para;
	typeP = typeP.toLowerCase();
	//讲参数para的数据类型全部变成小写，以方便后面判断的兼容
	if (typeP == 'function') {
		//如果是 $(function(){})的形式，则相当于 window.onload
		window.onload = para;
	} else if (typeP == 'string') {
		//如果是string，则代表通过元素id或者class获取该元素
		var fPara = para.charAt(0) // 得到第一个字符，是 ‘#’ 还是 ‘.’ 以此来辨别获取id还是class
		if (fPara == '#') {
			para = para.substring(1);
			return document.getElementById(para); //获取id并返回
		} else if (fPara == '.') {
			para = para.substring(1);

			obj = obj || document;
			if (document.getElementsByClassName) {
				return document.getElementsByClassName(para)
					//浏览器支持getElementsByClassName方法，直接返回
			}
			var arrClass = [];
			var all = obj.getElementsByTagName('*')
			for (var i = 0; i < all.length; i++) {
				var arr = all[i].className.split(' ');
				for (var j = 0; j < arr.length; j++) {
					if (arr[j] == para) {
						arrClass.push(all[i]);
					}
				}
			}
			return arrClass; //浏览器不支持getElementsByClassName方法，通过遍历className返回
		}

	}
};

/*带透明度的完整缓冲框架*/
function move(obj, attr, target,fn) {
	
	var speed = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		if (attr == 'opacity') {
			var iCur = parseInt(getStyle(obj, attr) * 100)
		} else {
			var iCur = parseInt(getStyle(obj, attr));
		}

		if (target > iCur) {
			speed = Math.ceil((target - iCur) / 2);
		} else {
			speed = Math.floor((target - iCur) / 2);
		}

		//停止条件
		if (iCur == target) {
			clearInterval(obj.timer);
			fn();
		} else {
			if (attr == 'opacity') {
				obj.style.filter = 'alpha( ' + attr + ' = ' + (iCur + speed) + ' )';
				obj.style[attr] = (iCur + speed) / 100;
				//alert(obj.style[attr] = (iCur+speed) / 100)
			} else {
				obj.style[attr] = iCur + speed + 'px';
			}
		}

	}, 30)
}
/*获取非行间样式插件*/
function getStyle(obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
};