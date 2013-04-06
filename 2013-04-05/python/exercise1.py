#altezza pavimento = 0.14
#altezza di ogni piano = 2.36

from pyplasm import *

#pillars0

cyl = T([1,2])([0.25,0.25])(CYLINDER([0.25,2.36])(36))

cylRow01 = STRUCT(NN(5)([T([1,2])([0.25,0.25])(CYLINDER([0.25,2.36+0.14])(36)),T([1])([0.5+4.7])]))
cyl01 = T([2,3])([0.5+9.1,0.14])(cyl)
cyls01 = STRUCT([cylRow01,cyl01])

pil = CUBOID([0.5,0.5,2.36])

pil01 = T([1,2,3])([0.5+2.2,0.5+9.1,0.14])(pil)
pilRow01 = T([2,3])([9.1+0.5,0.14])(STRUCT(NN(3)([T([1])([0.5+4.7]),pil])))
pils01 = STRUCT([pil01,pilRow01])

pillars0 = STRUCT([cyls01,pils01])

#pillars1

pilRow11 = STRUCT(NN(5)([pil,T([1])([5.2])]))
pilRow12 = T([2])([9.1+0.5])(STRUCT(NN(3)([pil,T([1])([5.2])])))
cyl11 = T([1,2])([0.5+4.7+0.5+4.7+0.5+4.7,0.5+9.1])(cyl)
pil11 = T([1,2])([0.5+4.7+0.5+4.7+0.5+4.7+0.5+4.7,0.5+9.1])(pil)

pilMini = S([1,2])([0.5,0.5])(pil)
pilMini11 = T([1,2])([0.5+0.9,0.5+9.1])(pilMini)

pillars1 = T([3])([0.14+2.36+0.14])(STRUCT([pilRow11,pilRow12,cyl11,pil11,pilMini11]))

#pillars2

pilRow21 = T([2,3])([0.5+9.1,0.14+((2.36+0.14)*2)])(pilRow11)
pilRow22 = STRUCT([T([3])([0.14+((2.36+0.14)*2)]),pil,T([1])([0.5+4.7]),pil,T([1])([0.5+4.7+0.5+4.7+0.5+4.7]),pil])
pillars2 = STRUCT([pilRow21,pilRow22])

#pillars3

pilMini31 = T([2,3])([0.5+9.1+0.25,0.14+((2.36+0.14)*3)])(pilMini)
pilMini32 = T([1,2,3])([0.5+4.7,0.5+9.1+0.25,0.14+((2.36+0.14)*3)])(pilMini)
pilRow31 = STRUCT([T([1,2,3])([0.5+4.7+0.5+4.7,0.5+9.1,0.14+((2.36+0.14)*3)]),pil,T([1])([0.5+4.7]),pil,T([1])([0.5+4.7]),pil])
pilRow32 = STRUCT([T([1,3])([0.5+4.7+0.5+4.7,0.14+((2.36+0.14)*3)]),pil,T([1])([0.5+4.7+0.5+4.7]),pil])
pillars3 = STRUCT([pilMini31,pilMini32,pilRow31,pilRow32])

pillars = STRUCT([pillars0,pillars1,pillars2,pillars3])

building = STRUCT([pillars])

