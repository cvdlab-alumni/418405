console.log("\nESERCIZIO 02\n")

function Edge(p1,p2){
	this.p1 = p1;
	this.p2 = p2;
}

console.log("var e1 = new Edge(p1, p2)");

var e1 = new Edge(p1,p2);

console.log(e1);

console.log("Definisco Edge.length()");

Edge.prototype.length = function(){
	var dX2 = Math.pow(this.p1.x - this.p2.x, 2);
	var dY2 = Math.pow(this.p1.y - this.p2.y, 2);
	return Math.sqrt(dX2+dY2);
}

console.log("e1.length() = "+e1.length());
