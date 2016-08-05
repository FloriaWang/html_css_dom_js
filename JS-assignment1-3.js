var product = multiply();
function multiply(element1,element2){
	var sum=1;
	if(arguments.length==0)
		return 0;
	for(i=0;i<arguments.length;i++){
		if(isNaN( Number(arguments[i])))
			return "error";
		sum=sum*arguments[i];
	}
	console.log(sum);
	return sum;
}
multiply(2, 3);	 
	multiply(-1, 3, 4);
	multiply(1, 2, 3, 4, 5);