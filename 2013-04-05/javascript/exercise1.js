




//pillars0

var cyl = T([0,1])([0.25,0.25])(CYL_SURFACE([0.25,2.36])([36,1]))

var cylRow01 = STRUCT(REPLICA(5)([T([0,1])([0.25,0.25])(CYL_SURFACE([0.25,2.36+0.14])([36,1])),T([0])([0.5+4.7])]))
var cyl01 = T([1,2])([0.5+9.1,0.14])(cyl)
var cyls01 = STRUCT([cylRow01,cyl01])

var pil = CUBOID([0.5,0.5,2.36])

var pil01 = T([0,1])([0.5+2.2,0.5+9.1,0.14])(pil)
var pilRow01 = T([1])([9.1+0.5,0.14])(STRUCT(REPLICA(3)([T([0])([0.5+4.7]),pil])))
var pils01 = STRUCT([pil01,pilRow01])

var pillars0 = STRUCT([cyls01,pils01])

//pillars1

var pilRow11 = STRUCT(REPLICA(5)([pil,T([0])([5.2])]))
var pilRow12 = T([1])([9.1+0.5])(STRUCT(REPLICA(3)([pil,T([0])([5.2])])))
var cyl11 = T([0,1])([0.5+4.7+0.5+4.7+0.5+4.7,0.5+9.1])(cyl)
var pil11 = T([0,1])([0.5+4.7+0.5+4.7+0.5+4.7+0.5+4.7,0.5+9.1])(pil)

var pilMini = S([0,1])([0.5,0.5])(pil)
var pilMini11 = T([0,1])([0.5+0.9,0.5+9.1])(pilMini)

var pillars1 = T([2])([0.14+2.36+0.14])(STRUCT([pilRow11,pilRow12,cyl11,pil11,pilMini11]))

//pillars2

var pilRow21 = T([1,2])([0.5+9.1,0.14+((2.36+0.14)*2)])(pilRow11)
var pilRow22 = STRUCT([T([2])([(0.14+((2.36+0.14)*2)]),pil,T([0])([0.5+4.7]),pil,T([0])([0.5+4.7+0.5+4.7+0.5+4.7]),pil])
var pillars2 = STRUCT([pilRow21,pilRow22])

//pillars3

var pilMini31 = T([1,2])([0.5+9.1+0.25,0.14+((2.36+0.14)*3)])(pilMini)
var pilMini32 = T([0,1,2])([0.5+4.7,0.5+9.1+0.25,0.14+((2.36+0.14)*3)])(pilMini)
var pilRow31 = STRUCT([T([0,1,2])([0.5+4.7+0.5+4.7,0.5+9.1,0.14+((2.36+0.14)*3)]),pil,T([0])([0.5+4.7]),pil,T([0])([0.5+4.7]),pil])
var pilRow32 = STRUCT([T([0,2])([0.5+4.7+0.5+4.7,0.14+((2.36+0.14)*3)]),pil,T([0])([0.5+4.7+0.5+4.7]),pil])
var pillars3 = STRUCT([pilMini31,pilMini32,pilRow31,pilRow32])

DRAW(STRUCT([pillars0,pillars1,pillars2,pillars3]))