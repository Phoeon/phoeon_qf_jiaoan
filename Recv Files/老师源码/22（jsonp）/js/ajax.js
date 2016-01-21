function ajax( mJson ){
	var asyn = mJson.asyn || true; // asyn 接收 是否异步 true=异步，false=同步，默认true
	var url = mJson.url; // url 接收 传输位置
	var type = mJson.type || 'get'; // type 接收 传输方法 get or post ，默认 get
	var data = mJson.data || ''; // data 接收需要附带传输的数据
	var success = mJson.success; // success 接收 传输完成后的回调函数
	
	//创建ajax对象
	var xhr = window.XMLHttpRequest?(new XMLHttpRequest()) : (new ActiveXObject('Microsoft.XMLHTTP'));
	//get方法附带数据拼接到url
	if( type == 'get' && data ){
		url += '?'+ data + '&' +Math.random();
		//get.php?user=hhl&pwd=123&+Math.random();
	}
	
	//初始化ajax请求
	xhr.open( type , url , asyn );
	
	//规定传输数据的格式
	xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
	//发送ajax请求（包括post数据的传输）
	if( type == 'get' ){
		xhr.send();
	}else{
		xhr.send( data );
	}
	//当ajax请求状态发生改变时执行的函数
	xhr.onreadystatechange = function(){
		//请求成功的话
		if(xhr.readyState == 4){
			if(xhr.status>=200 && xhr.status<300){
				//回调函数
				success && success( xhr.responseText );
			}else{
				alert('您出错了'+xhr.status);
				}
			}
		}
	}
