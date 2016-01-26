(function(root){
	var xhr ;
	/*
		method 请求方式  get 或者 post
		url    请求数据的server端地址
		async  是否异步加载
		fn 	   加载成功后的回调函数  后续对于数据的处理
	*/
	root.request = function(method,url,async,fn){
		// 创建xhr对象  readyState = 0;
		xhr||(xhr=new XMLHttpRequest());

		//异步回调执行条件
		if(async){
			xhr.onreadystatechange = function(){
				(xhr.readyState==4&&xhr.status==200)&&fn(xhr.responseText);
			}
		}
		//为发送请求做准备
		//readyState = 1
		xhr.open(method||"get",url,async||false);
		//发送请求
		//readyState = 2
		xhr.send();

		//同步回调执行条件
		(!async&&xhr.status==200)&&fn(xhr.responseText);
	}
})(this);