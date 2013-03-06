console.log("\nESERCIZIO 01\n");

function identity(n){
	var matrix = new Array();
	for (var i = 0; i<n; i++){
		matrix[i]=[];
		for (var j = 0; j<n; j++){
			if (i==j) matrix[i][j] = "1\t";
			else matrix[i][j] = "0\t";
		}
	}
	return matrix;
}

console.log("identity(4)");
console.log(identity(4));