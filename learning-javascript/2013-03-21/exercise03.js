console.log("\nESERCIZIO 03\n")

function Triangle(e1,e2,e3){
	this.e1 = e1;
	this.e2 = e2;
	this.e3 = e3;
}

console.log("var e2 = new Edge(new Punto2D(0,0), new Punto2D(0,4));");

var e2 = new Edge(new Punto2D(0,0), new Punto2D(0,4))

console.log("e2.length() = "+e2.length());

console.log("var e3 = new Edge(new Punto2D(4,0), new Punto2D(0,4));");

var e3 = new Edge(new Punto2D(4,0), new Punto2D(0,4));

console.log("e3.length() = "+e3.length());

console.log("var t = new Triangle(e1,e2,e3)");

var t = new Triangle(e1, e2, e3);

console.log(t);

console.log("Definisco Triangle.perimeter()");

Triangle.prototype.perimeter = function() {
	return e1.length()+e2.length()+e3.length();
};

console.log("t.perimeter() = "+t.perimeter());

console.log("Definisco Triangle.area()");

Triangle.prototype.area = function() {
	p = this.perimeter() / 2;
	return Math.sqrt(p*(p-this.e1.length())*(p-this.e2.length())*(p-this.e3.length()));
};

console.log("t.area() = "+t.area());