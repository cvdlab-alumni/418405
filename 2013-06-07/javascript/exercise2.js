var domainTerrain = DOMAIN([[0, 10], [0, 10]])([64, 64]);

var GREENWATER = [0/255, 180/255, 120/255, 0.9];

var mounts = function(dom){
	var x = dom[0];
	var y = dom[1];
	var z = SIN(x)*COS(y);
	var dz = x*y/50*Math.random();
	return [x, y, dz*z];
}

var terrain = MAP(mounts)(domainTerrain);

var lake0 = T([0, 1, 2])([2*PI, PI/2, -1.05])(CUBOID([PI, PI, 1]));
var lake1 = T([0, 1, 2])([PI, 3*PI/2, -1.05])(CUBOID([PI, PI, 1]));

var lakes = STRUCT([COLOR(GREENWATER), lake0, lake1]);

var model = STRUCT([terrain, lakes]);

DRAW(model);