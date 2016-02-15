//随机点名
var namelist = ["于佳文","杨红玉","贺怡","尚利平"];
for(var i=0; i<100; i++) {
	var index = Math.round( Math.random()*3 );
	console.log(namelist[index]);
}

//随机验证码
function test() {
	var checkcode = Math.round(Math.random()*9000) +1000;
	document.getElementById("num1").value = checkcode;
}
