from pyplasm import *
import random

domainTerrain = PROD([INTERVALS(10)(64),INTERVALS(10)(64)])

GREENWATER = [0/255, 180/255, 120/255, 0.9]

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

model = STRUCT([terrain, lakes])

VIEW(model)