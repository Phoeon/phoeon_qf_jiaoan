function fnPlus(iNum1,iNum2){
	var result = iNum2 + iNum1 ;
	document.write("fnPlus: ")
	document.write(result);
	document.write("<br/>")
}

function fnMinus(iNum1,iNum2){
	var result = iNum2 - iNum1 ;
	document.write("fnMinus: ")
	document.write(result);
	document.write("<br/>")
}

function fnMultiple(iNum1,iNum2){
	var result = iNum2 * iNum1 ;
	document.write("fnMultiple :")
	document.write(result);
	document.write("<br/>")
}

function fnDivide(iNum1,iNum2){
	var result = iNum2 / iNum1 ;
	document.write("fnDivide ")
	document.write(result);
	document.write("<br/>")
}

function fnModel(iNum1,iNum2){
	var result = iNum2 % iNum1 ;
	document.write("fnModel :")
	document.write(result);
	document.write("<br/>")
}
function starUp(){
	var base = 7;

	for(var i=0;i<base;i++){
		for(var j=0;j<2*base+1;j++){
			if(j>=base-i&&j<=base+i)
				document.write("*");
			else document.write(".");
		}
		document.write("<br/>")
	}
}

function starDown(){
	var base = 7;
	//倒过来的三角star
	for(var i=0;i<base;i++){
		for(var j=0;j<2*base+1;j++){
			if(j>i&&j<2*base-i)
				document.write("*");
			else document.write(".");
		}
		document.write("<br/>")
	}
}

function starIf(){
	var base = 7;

	for(var i=0;i<base;i++){
		for(var j=0;j<2*base+1;j++){
			if(j>=base-i&&j<=base+i)
				document.write("*");
			else document.write("&ensp;");
		}
		document.write("<br/>")
	}
	//倒过来的三角star
	for(var i=1;i<base;i++){
		for(var j=0;j<2*base+1;j++){
			if(j>i&&j<2*base-i)
				document.write("*");
			else document.write("&ensp;");
		}
		document.write("<br/>")
	}
}

function starCondition(){
	var base = 7;
	for(var i=0;i<base;i++){
		for(var j=0;j<2*base+1;j++){
			document.write((j>=base-i&&j<=base+i)?"*":"&ensp;");
		}
		document.write("<br/>")
	}
}

function starAuto(base){
	for(var i=0;i<base;i++){
		for(var j=0;j<2*base+1;j++){
			document.write((j>=base-i&&j<=base+i)?"*":"&ensp;");
		}
		document.write("<br/>")
	}
}