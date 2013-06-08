from pyplasm import *
import random

domainTerrain =  PROD([INTERVALS(10)(64),INTERVALS(10)(64)])

def mounts (dom):
	x = dom[0]
	y = dom[1]
	z = SIN(x)*COS(y)
	dz = x*y/50*random.random()
	return [x, y, dz*z]

model = MAP(mounts)(domainTerrain)

VIEW(model)
