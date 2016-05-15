;(function(root,$){
	   var __config = {
	   		triggerEvent : {
		   		keyup : false,
		   		blur : true
	   		},
	   		errorClass : "error",
	   		onsubmit : function(){
	   			return __isSubmit(this);
	   		}
	   }
   	   var __Validators = {
	   	  len : {
	          fn : function(field){
	          	return field.value.length>parseInt(this.infos[1]);
	          },
	          tip : "长度非法"
	   	  },
	   	  email : {
	   	  	  fn : function(field){
	   	  	  	return /^\w+@\w+\.\w+$/.test(field.value)
	          },
	          tip : "非法邮箱规则"
	   	  },
	   	  number : {
	   	  	  fn : function(field){
	   	  	  	  return /^\d+$/.test(field.value);
	   	  	  },
	   	  	  tip:"无效数组"
	   	  }
	   }
	   var __validate =  function(valid,field,validator){
	   		if(valid){
	   			field.parentNode.className = "form-item";
	   			field.parentNode.nextElementSibling.innerHTML = "";
	   		}else {
	   			field.parentNode.className = "form-item "+__config.errorClass;
	   			field.parentNode.nextElementSibling.innerHTML = validator.tip;
	   		}
	   }
	   var __isSubmit = function(form){
	   		var fields = form.getElementsByClassName("valid");
	   		var valid = true;
	   		for(var i=0;i<fields.length;i++){
	   			valid = __valid.call(fields[i])?valid:false;
	   		}
	   		return valid;
	   }

	   var __init = function(){
	   	   var form = this[0];///document.querySelector(selector);
	   	   var fields = form.getElementsByClassName("valid");

	   	   form.onsubmit = __config.onsubmit;
		   for(var i=0;i<fields.length;i++){
		   	  var field = fields[i];

		   	  __config.triggerEvent.keyup&&(field.onkeyup = __valid);
		   	  __config.triggerEvent.blur&&(field.onblur = __valid);
		   }
	   }

	   var __valid = function(){
	   	  	var validator = this.getAttribute("data-validators");
	   	  	var infos = validator.split(":");
	   	  	var validatorRule = __Validators[infos[0]];
	   	  	validatorRule.infos = infos;

	   	  	var result = validatorRule.fn(this);
	   	  	__validate(result,this,validatorRule)
	   	  	return result;
   	  }
	   var __addOrReplace = function(vName,obj){
	   		var rule = __Validators[vName]||{};
	   		for(var k in obj){
	   			rule[k] = obj[k];
	   		}
	   		__Validators[vName] = rule;
	   }
      
      $.fn.extend({
     	config : function(obj){
     		for(var k in obj){
     			__config[k] = obj[k];
     		}
     	},
     	addOrReplaceRule : function(vName,obj){
     		__addOrReplace(vName,obj)
     	},
     	validate : function(){
     		__init.apply(this);
     	}
     });
      //$("form").validate();
   })(this,$)