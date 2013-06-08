var domainTerrain = DOMAIN([[0, 10], [0, 10]])([64, 64]);

var GREENWATER = [0/255, 180/255, 120/255, 0.9];
var BROWN = [60/255, 30/255, 10/255];
var GREEN = [0, 130/255, 0];
var BROWN2 = [53/255, 43/255, 9/255];

var mounts = function(dom){
	var x = dom[0];
	var y = dom[1];
	var z = SIN(x)*COS(y);
	var dz = x*y/50*Math.random();
	return [x, y, dz*z];
}

var terrain = COLOR(BROWN2)(MAP(mounts)(domainTerrain));

var lake0 = T([0, 1, 2])([2*PI, PI/2, -1.05])(CUBOID([PI, PI, 1]));
var lake1 = T([0, 1, 2])([PI, 3*PI/2, -1.05])(CUBOID([PI, PI, 1]));

var lakes = STRUCT([COLOR(GREENWATER), lake0, lake1]);

var Circum = function(r, h){
	var Circum0 = function(v){
		return [r*COS(v[0]), r*SIN(v[0]), h];
	}
	return Circum0;
}

var CYLINDER = function(r, h){
  function CYLINDER0(l){
  	var s = CYL_SURFACE([r, h])(l);
  	var b1 = DISK(r)(l);
  	var b2 = T([2])([h])(b1);
  	return STRUCT([s, b1, b2]);
  }
  return CYLINDER0;
}

var CONE = function(r, h1, h2){
  function CONE0(l){
  	var domainCircular = PROD1x1([INTERVALS(2*PI)(l[0]), INTERVALS(1)(l[1])]);
	var c = Circum(r, h1);
	var base = MAP(BEZIER(S1)([c, [0, 0, h1]]))(domainCircular);
	var s = MAP(BEZIER(S1)([c, [0, 0, h1+h2]]))(domainCircular);
	return STRUCT([s, base]);
  }
  return CONE0;
}

var tree = function(r1, r2, h1, h2){
	var tree0 = function(divs){
		var trunk = COLOR(BROWN)(CYLINDER(r1, h1)(divs));
		var leafs = COLOR(GREEN)(CONE(r2, h1, h2)(divs));
		return STRUCT([T([0, 1])([r2, r2]), trunk, leafs]);
	}
	return tree0;
}

var forest = function(r1, r2, h1, h2){
	var forest0 = function(subset){
		var trees = [];
		
		var x1 = subset[0];
		var x2 = subset[1];
		var y1 = subset[2];
		var y2 = subset[3];
		var z1 = subset[4];

		for (var x = x1; x < x2; x+=0.25){
			for (var y = y1; y < y2; y+=0.25){
				if (Math.random() > 0.45){
					var newZ = SIN(x)*COS(y)*x*y/50;
					var t = tree(r1*(Math.random()+1), r2*(Math.random()+1), h1*(Math.random()+1), h2*(Math.random()+1))([12, 1]);
					trees = trees.concat(T([0, 1, 2])([x, y, newZ])(t));
				}
			}
		}

		return STRUCT(trees);
	}
	return forest0;
}

var coniferous_forest0 = forest(0.02, 0.06, 0.07, 0.15)([0, PI/4, PI/2, 5*PI/2, 0]);
var coniferous_forest1 = forest(0.02, 0.06, 0.07, 0.15)([2*PI, 3*PI, 0, PI/2, 0]);

var coniferous_forests = STRUCT([coniferous_forest0, coniferous_forest1]);


var building = function(x, y, z){
	return CUBOID([x*(Math.random()+1), y*(Math.random()+1), z*(Math.random()+1)]);
}

var settlement = function(w, l, h){
	var set0 = function(subset){

		var buildings = [];
		
		var x1 = subset[0];
		var x2 = subset[1];
		var y1 = subset[2];
		var y2 = subset[3];
		var z1 = subset[4];

		var road_width = 0.07

		var horizontal_road = CUBOID([x2-x1, road_width, 0]);

		var vertical_road = CUBOID([road_width, y2-y1, 0]);

		for (var x = x1; x < x2; x += (w + 0.05 + road_width + 0.05)){
			for (var y = y1; y < y2; y += (l + 0.05 + road_width + 0.05)){
				if (Math.random() > 0.15){
					var b = building(w, l, h);
					buildings = buildings.concat(T([0, 1, 2])([x, y, z1])(b));
				}
				buildings = buildings.concat(T([0, 1, 2])([x1, y + 0.05 + road_width, z1])(horizontal_road));
			}
			buildings = buildings.concat(T([0, 1, 2])([x + 0.05 + road_width + 0.05, y1, z1])(vertical_road));
		}
		return STRUCT(buildings);
	}
	return set0;
}

var settlement0 = settlement(0.1, 0.05, 0.2)([5*PI/4, 7*PI/4, 0, PI/2, 0]);

var settlement1 = settlement(0.1, 0.1, 0.2)([PI/10, 3*PI/4, PI/20, 2*PI/5, 0.02]);

var settlements = STRUCT([settlement0, settlement1]);

var model = STRUCT([terrain, lakes, coniferous_forests, settlements]);

DRAW(model);


