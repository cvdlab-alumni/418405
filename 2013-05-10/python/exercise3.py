
def Circum(h,r):
	def Circum0(v):
		return [r*COS(v[0]), r*SIN(v[0]), h]
	return Circum0

domcir = PROD([INTERVALS(2*PI)(36),INTERVALS(1)(36)])

#pneumatic / wheel circular surface

ciw00 = Circum(-0.25,0.7)
ciw01 = Circum(-0.5,0.95)
ciw02 = Circum(0.25,0.92)
ciw03 = Circum(-0.15,0.55)

scw0 = MAP(BEZIER(S2)([ciw03,ciw00,ciw01,ciw02]))(domcir)

scw00 = COLOR(BLACK)(STRUCT([scw0, T([3])([0.2])(R([1,3])(PI)(scw0))]))

#VIEW(scw00)

#rim

cyl0 = T([3])([-0.2])(CYLINDER([0.4,0.05])(36))
cyl1 = CYLINDER([0.7,0.7])(36)
cyl2 = CYLINDER([0.6,0.7])(36)
cyl = T([3])([-0.25])(DIFF([cyl1,cyl2]))

diff_cyl = T([3])([-0.025])(CYLINDER([0.15,0.05])(24))

center = T([3])([-0.25])(DIFFERENCE([CYLINDER([0.2,0.05])(24),diff_cyl]))

tdiff_cyl =  S([1,2])([1.7,1.7])(T([1,2,3])([0.3, 0.05, -0.25])(diff_cyl))

diff_cyls = STRUCT([R([1,2])(2*PI/5),tdiff_cyl,R([1,2])(2*PI/5),tdiff_cyl,R([1,2])(2*PI/5),tdiff_cyl,R([1,2])(2*PI/5),tdiff_cyl,R([1,2])(2*PI/5),tdiff_cyl])

ray00 = T([1,2,3])([-0.15,-0.05,-0.25])(R([1,3])(PI/2)(CUBOID([0.05,0.1,0.6])))

ray0 = STRUCT([ray00,R([1,2])(2*PI/5),ray00,R([1,2])(2*PI/5),ray00,R([1,2])(2*PI/5),ray00,R([1,2])(2*PI/5),ray00])
ray1 = R([1,2])(PI/10)(ray0)

rays = STRUCT([DIFFERENCE([ray0,diff_cyls]),DIFFERENCE([ray1,diff_cyls])])

wheel = STRUCT([scw00,cyl0,cyl,rays,center])

#VIEW(wheel)

w00 = T([1,2,3])([-3.25,-0.9,-2.75])(wheel)
w01 = T([1])([6.8])(w00)
w02 = T([1])([-6.5])(R([1,3])(PI)(w00))
w03 = T([1])([6.8])(w02)

wheels = S([1,2,3])([0.45,0.45,0.45])(STRUCT([w00,w01,w02,w03]))

#VIEW(wheels)

mock = STRUCT([centered_sk,wheels])

VIEW(mock)