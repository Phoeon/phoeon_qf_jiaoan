function max(arr){
	var iMax = arr[0];
	var iIndex = 0;

	for(var i = 1;i<arr.length;i++){
		if(arr[i] >= iMax){
			iMax = arr[i];
			iIndex = i;
		}
	}

	return [iMax,iIndex] ;
}

function min(arr){
	var iMin = arr[0];
	var iIndex = 0 ;
	for(var i=1;i<arr.length;i++){
		if(arr[i]<=iMin){
			iMin = arr[i];
			iIndex = i ;
		}
	}

	return new Array(iMin,iIndex);
}