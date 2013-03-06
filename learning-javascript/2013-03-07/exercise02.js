console.log("\nESERCIZIO 02\n");

function fibonacci(i){
	if (i>1)
		fibonacci[i] = fibonacci(i-1)+fibonacci(i-2);
	return fibonacci[i];
}

fibonacci[0] = 0;
fibonacci[1] = 1;

console.log("fibonacci(6) = "+fibonacci(6));
console.log("fibonacci(7) = "+fibonacci(7));
console.log("fibonacci(8) = "+fibonacci(8));