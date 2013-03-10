console.log("\nESERCIZIO 03\n");

function ex02(n){
	var a = new Array();
	for (var i = 0; i<n; i++){
		var rn = Math.random();
		a.push(Math.ceil(rn*100));
	}

	console.log("array creato");
	console.log(a);

	a = a.filter(function(item){
		return item%2===0;
	})

	console.log("rimossi i numeri dispari");
	console.log(a);

	a = a.sort(function(v1,v2){
		return v1-v2;
	})

	console.log("ordinati i numeri restanti");
	console.log(a);

}