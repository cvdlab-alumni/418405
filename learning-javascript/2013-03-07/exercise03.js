
console.log("\nESERCIZIO 03\n");

function Point (){
	this.xx = arguments[0];
	this.yy = arguments[1];
}

console.log("var p = new Point (1,2)");
var p = new Point(1,2);
console.log("p.xx = "+p.xx+", p.yy = "+p.yy);