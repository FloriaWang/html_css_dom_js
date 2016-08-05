var obj=parseQuery("name= tom &age=12&gender&");
function parseQuery(query){
	var arr=query.split("&");
	var name=[];
	var value=[];
	var obj={};
	for(i=0;i<arr.length;i++){
		var temp=arr[i].split("=");
		if(temp[0]!=""){
			name.push(temp[0]);
		}
		else 
			continue;
		if(temp[1]!=undefined){
			value.push(temp[1].replace(/\s+/g,""));
		}
		else{
			value.push("");
		}
	}
	for(i=0;i<name.length;i++){
		obj[name[i]]=value[i];
	}
	return obj;
	
};
console.log(obj);
var jerry = parseQuery("name=jerry&age=1");
console.log(jerry);