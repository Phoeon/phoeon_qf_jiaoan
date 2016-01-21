$(function(){
	var oLi = $("#ul").getElementsByTagName("li");
	var oL = $("#turnL");
	var oR = $("#turnR");
	var index = 0
	var num = 0;
	//初始状态
	for ( var i = 0 ; i < oLi.length ; i++ ){
		oLi[i].style.background = 'url(img/' + (i+1) + '.jpg) ';
		}
	//右
	oR.onclick = function(){
		num>=24?num=1:num++;
		oLiChange();
	}
	//左
	oL.onclick = function(){
		num<=1?num=24:num--;
		oLiChange();
	}
	//改变图片
	function oLiChange(){
		var arr = [];
		for ( var q = 0 ; q < 24 ; q++ ){
			arr.push(parseInt(Math.random()*500))
		}
		for ( var i = 0 ; i < 4 ; i++ ){
			for ( var j = 0 ; j < 6 ; j++ ){
				index = 6*i+j;
				var t = arr[index];
				time110(index,j,i,t);
			}	
		}
	}
	function time110(index,j,i,t){
		setTimeout(function(){
			oLi[index].style.background = 'url(images/' + num + '.jpg) ' + (-125*j) + 'px ' + (-125*i) + 'px';
		},t);
	}
})