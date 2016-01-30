var form = document.getElementsByClassName("form")[0];

	var usernameIp = document.getElementsByName("username")[0];
	var email      = document.getElementsByName("email")[0];
	var motto      = document.getElementsByName("motto")[0];

	// 阻止表单提交
	form.onsubmit=function(){
		var fields = form.getElementsByClassName("field");
		var valid = true;
		for(var i=0;i<fields.length;i++){
			var field = fields[i];
			if(field.className.indexOf("btn")==-1){
				field.validate();
				valid=(field.valid!=true)?false:valid;
			}
		}
		return valid;
	}
	form.onreset = function(){
		var fields = form.getElementsByClassName("field");
		for(var i=0;i<fields.length;i++){
			var field=fields[i];
			if(field.className.indexOf("btn")==-1)field.className="field";
		}
		return true;
	}

	// 用户名验证
	usernameIp.validate=usernameIp.onkeyup=function(){
		var value = this.value;
		this.valid = (
			/^[A-z0-9]{8,}$/.test(value)&&
			/[A-z]/.test(value)&&
			/[0-9]/.test(value)&&
			!/\\/.test(value));

		valid(this,"非法用户名");
	}
	// 邮箱验证
	email.validate=email.onkeyup=function(){
		this.valid = /\w+@\w+\.com/.test(this.value);
		valid(this,"非法邮箱")
	}
	// 座右铭验证
	motto.validate=motto.onkeyup=function(){
		this.valid = this.value.length<50;
		valid(this,"字符数超出上线50");
	}

	function valid(field,tip){
		if(field.valid===true){
			field.className = "field valid";
			field.nextElementSibling.innerHTML="";
		}else {
			field.className = "field invalid";
			field.nextElementSibling.innerHTML = tip;
		}
	}