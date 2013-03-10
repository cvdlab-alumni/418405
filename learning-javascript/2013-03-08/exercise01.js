console.log("\nESERCIZIO 01\n");

function ex01(n){

	var a = new Array();
	for(var i = 0; i<n; i++){
		a.push(i);
	}

	console.log("pusha i primi n numeri naturali");
	console.log(a);

	a = a.filter(function(item){
		return (item%2==0);
	})

	console.log("filtra i numeri dispari");
	console.log(a);

	a = a.map(function(item){
		return item*2;
	})

	console.log("raddoppia i numeri pari ottenuti");
	console.log(a);

	a = a.filter(function(item){
		return (item%4==0);
	})

	console.log("mantiene solo i numeri divisibili per 4");
	console.log(a);

	a = a.reduce(function(prev, cur){
		return prev + cur;
	})

	console.log("somma tutti i numeri rimasti");
	console.log(a);

}