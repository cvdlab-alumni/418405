console.log("\nESERCIZIO 04\n");

function select(d,k,v){
	var result = new Array();
	d.forEach(function(obj){
		v.forEach(function(val){
			if (obj[key] === val)
				result.push(obj);
		})
	})
	return result;
}
