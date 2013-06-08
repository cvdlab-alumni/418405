var domainTerrain = DOMAIN([[0, 10], [0, 10]])([64, 64]);

var mounts = function(dom){
	var x = dom[0];
	var y = dom[1];
	var z = SIN(x)*COS(y);
	var dz = x*y/50*Math.random();
	return [x, y, dz*z];
}

var model = MAP(mounts)(domainTerrain);

DRAW(model);
