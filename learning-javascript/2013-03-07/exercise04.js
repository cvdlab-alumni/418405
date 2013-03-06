
console.log("\nESERCIZIO O4\n");

function Triangle (){
	this.v1 = new Point(arguments[0],arguments[1]);
	this.v2 = new Point(arguments[2],arguments[3]);
	this.v3 = new Point(arguments[4],arguments[5]);
	this.area = function(){
		return Math.abs(((this.v2.xx-this.v1.xx)*(this.v3.yy-this.v1.yy)-(this.v2.yy-this.v1.yy)*(this.v3.xx-this.v1.xx))/2);
	}
}

console.log("var t = new Triangle (2,2,2,4,5,2)");
var t = new Triangle(2,2,2,4,5,2);
console.log("v1 = ("+t.v1.xx+", "+t.v1.yy+")");
console.log("v2 = ("+t.v2.xx+", "+t.v2.yy+")");
console.log("v3 = ("+t.v3.xx+", "+t.v3.yy+")");
console.log("t.area = "+ t.area());