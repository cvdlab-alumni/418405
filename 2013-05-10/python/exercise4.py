
import scipy
import numpy
cd larpy
from lar import *

def GRID(args):
	model = ([[]],[[0]])
	for k,steps in enumerate(args):
		model = larExtrude(model,steps*[1])
	V,cells = model
	verts = AA(list)(scipy.array(V)/AA(float)(args))
	return MKPOL([verts,AA(AA(lambda h:h+1))(cells),None])

dom1D = GRID([10])

dom2D = GRID([20,20])

#superficie di bezier con 2 curve 

def bs2(l):
	p1,p2 = l
	c1 = BEZIER(S1)(p1)
	c2 = BEZIER(S1)(p2)
	#VIEW(STRUCT([MAP(c1)(dom1D),MAP(c2)(dom1D),MAP(c3)(dom1D)]))
	return MAP(BEZIER(S2)([c1,c2]))(dom2D)

def Circum(h,r):
	def Circum0(v):
		return [r*COS(v[0]), r*SIN(v[0]), h]
	return Circum0

domcir0 = PROD([INTERVALS(8*PI/5)(36),INTERVALS(1)(36)])

# steering wheel

cist00 = Circum(0,0.7)
cist01 = Circum(-0.2,0.85)
cist02 = Circum(0.2,0.85)
cist03 = Circum(0,1)

stw0 = MAP(BEZIER(S2)([cist00,cist01,cist03,cist02,cist00]))(domcir0)

#VIEW(stw0)

cyl3 = T([1,2])([0.825,0.05])(R([1,2])(-PI/4+PI/20)((R([2,3])(PI/2)(CYLINDER([0.078,1.05])(24)))))

cyl4 = T([3])([-0.075])(CYLINDER([0.3,0.15])(24))

cyl5 = T([3])([-0.075])(DIFF([CYLINDER([0.2,0.16])(24),CYLINDER([0.19,0.16])(24)]))

#right

prst00 = [[0.7, 0.5, -0.07], [0.7, 0.2, -0.07], [0.5, 0.2, -0.07], [0.2, 0.3, -0.07]]
prst01 = [[0.7, 0.5, 0.07], [0.7, 0.2, 0.07], [0.5, 0.2, 0.07], [0.2, 0.3, 0.07]]
crst00 = bs2([prst00,prst01])

prst02 = [[0.8, 0.1, -0.07], [0.7, 0.1, -0.07], [0.3, 0.1, -0.07], [0.2, 0.1, -0.07]]
prst03 = [[0.8, 0.1, 0.07], [0.7, 0.1, 0.07], [0.3, 0.1, 0.07], [0.2, 0.1, 0.07]]
crst01 = bs2([prst03,prst02])

crst02 = bs2([prst02,prst00])
crst03 = bs2([prst01,prst03])

rightst = T([1,2])([0.1,-0.1])(R([1,2])(PI/4+PI/18)(STRUCT([crst00,crst01,crst02,crst03])))

#left

plst00 = [[-0.4, 0.5, -0.07], [-0.4, 0.2, -0.07], [-0.2, 0.2, -0.07], [0.1, 0.3, -0.07]]
plst01 = [[-0.4, 0.5, 0.07], [-0.4, 0.2, 0.07], [-0.2, 0.2, 0.07], [0.1, 0.3, 0.07]]
clst00 = bs2([plst01,plst00])

plst02 = [[-0.5, 0.1, -0.07], [-0.4, 0.1, -0.07], [0, 0.1, -0.07], [0.1, 0.1, -0.07]]
plst03 = [[-0.5, 0.1, 0.07], [-0.4, 0.1, 0.07], [0, 0.1, 0.07], [0.1, 0.1, 0.07]]

clst01 = bs2([plst02,plst03])
clst02 = bs2([plst00,plst02])
clst03 = bs2([plst03,plst01])

leftst = T([1,2])([-0.05,-0.3])(R([1,2])(PI/4+PI/18)(STRUCT([clst00,clst01,clst02,clst03])))

downst = T([1,2,3])([0.5,-0.5,-0.05])(R([1,2])(PI/4+PI/18)(CUBOID([0.25,0.5,0.1])))

logo0 = R([1,2])(PI/4+PI/18)(T([1,2,3])([-0.075,-0.075,0.075])(TEXTURE('../workspace/418405/2013-05-10/images/image5.jpg')(CUBOID([0.15,0.15,0.01]))))

steerw = STRUCT([logo0,rightst,leftst,cyl5,COLOR(BLACK),stw0,cyl3,cyl4,downst])

#VIEW(steerw)

steering = R([2,3])(-PI/4-PI/20)(T([1,2,3])([-0.85,-0.4,0.5])(S([1,2,3])([0.3,0.3,0.3])(R([1,3])(-PI/2)(steerw))))

VIEW(steering)

mock = STRUCT([centered_sk,wheels,steering])

#VIEW(mock)
