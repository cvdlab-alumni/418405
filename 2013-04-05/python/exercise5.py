from pyplasm import *

step2D = MKPOL([[[0,0],[0,1.4+raiser],[depth,raiser],[depth,1.4+raiser]],
    [[1,2,3,4]],None])
step3D = MAP([S1,S3,S2])(PROD([step2D,Q(9)]))

ramp = STRUCT(NN(9)([step3D,T([1,3])([depth,raiser])]))