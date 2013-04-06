from pyplasm import *

''' step '''

step2D = MKPOL([[[0,0],[0.50,0.19],[0.5,0.33],[0,0.33]],[[1,2,3,4]],None])

step3D = MAP([S1,S3,S2])(PROD([step2D,Q(1.8)]))

''' ramp '''

ramp_origin = STRUCT(NN(13)([step3D, T([1,3])([0.50,0.19])]))

stair2 = T([1,2,3])([4.8,9.7+0.4,2.64])(ramp_origin)

stair3 = T([1,2,3])([8.8,9.7+0.4,2.64+2.5])(ramp_origin)

stair1 = T([1,2,3])([5.5,9.7+0.4,0.14])(R([1,2])(PI*2)(ramp_origin))

stairs = STRUCT([stair1,stair2,stair3])

building = STRUCT([pillars,floors,vert_partitions,windows,stairs])