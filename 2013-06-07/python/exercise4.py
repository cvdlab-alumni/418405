from pyplasm import *
import random
import numpy as np

domainTerrain = PROD([INTERVALS(10)(64),INTERVALS(10)(64)])
GREENWATER = [0/255, 180/255, 120/255, 0.9]
BROWN = [60/255, 30/255, 10/255]
GREEN = [0, 130/255, 0]
BROWN2 = [53/255, 43/255, 9/255]

def mounts (dom) :
	x = dom[0]
	y = dom[1]
	z = SIN(x)*COS(y)
	dz = x*y/50*random.random()
	return [x, y, dz*z]

terrain = MAP(mounts)(domainTerrain)

lake0 = T([1, 2, 3])([2*PI, PI/2, -1.05])(CUBOID([PI, PI, 1]))
lake1 = T([1, 2, 3])([PI, 3*PI/2, -1.05])(CUBOID([PI, PI, 1]))

lakes = STRUCT([COLOR(GREENWATER), lake0, lake1])

def tree (r1, r2, h1, h2):
	def tree0 (divs):
		trunk = COLOR(BROWN)(CYLINDER([r1, h1])(divs[0]))
		leafs = T([3])([h1])(COLOR(GREEN)(CONE([r2, h2])(divs[0])))
		return STRUCT([T([1, 2])([r2, r2]), trunk, leafs])
	return tree0

def forest (r1, r2, h1, h2) :
	def forest0 (subset) :
		trees = list()
		
		x1 = subset[0]
		x2 = subset[1]
		y1 = subset[2]
		y2 = subset[3]
		z1 = subset[4]

		for x in np.arange(x1, x2, 0.25):
			for y in np.arange(y1, y2, 0.25):
				if random.random() > 0.45 :
					newZ = SIN(x)*COS(y)*x*y/50
					t = tree(r1*(random.random()+1), r2*(random.random()+1), h1*(random.random()+1), h2*(random.random()+1))([12, 1])
					trees.append(T([1, 2, 3])([x, y, newZ])(t))

		return STRUCT(trees)
	return forest0

coniferous_forest0 = forest(0.02, 0.06, 0.07, 0.15)([0, PI/4, PI/2, 5*PI/2, 0])
coniferous_forest1 = forest(0.02, 0.06, 0.07, 0.15)([2*PI, 3*PI, 0, PI/2, 0])

coniferous_forests = STRUCT([coniferous_forest0, coniferous_forest1])

def building (x, y, z) :
	return CUBOID([x*(random.random()+1), y*(random.random()+1), z*(random.random()+1)])

def settlement (w, l, h) :
	def set0 (subset) :
		buildings = list()
		
		x1 = subset[0]
		x2 = subset[1]
		y1 = subset[2]
		y2 = subset[3]
		z1 = subset[4]

		for x in np.arange(x1, x2, 0.25):
			for y in np.arange(y1, y2, 0.25):
				if random.random() > 0.25 :
					b = building(w, l, h)
					buildings.append(T([1, 2, 3])([x, y, z1])(b))
		return STRUCT(buildings)
	return set0

settlement0 = settlement(0.1, 0.05, 0.2)([5*PI/4, 2*PI, 0, PI/2, 0])

settlement1 = settlement(0.1, 0.1, 0.2)([PI/10, 3*PI/4, PI/20, 2*PI/5, 0])

settlements = STRUCT([settlement0, settlement1])

model = STRUCT([terrain, lakes, coniferous_forests, settlements])

VIEW(model)


