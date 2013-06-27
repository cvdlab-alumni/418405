var BLACK = ([50/255, 50/255, 50/255]);

// pillows 

var points106 = [[4.49, 4.44], [4.55, 5.77], [4.63, 6], [4.85, 5.89]];
var points107 = [[4.65, 4.23], [4.85, 5.89]];

var pill100 = EXTRUDE([2.05])(bs2([points106, points107]));

var points108 = [[2.69, 4.24], [2.32, 4.56], [3.73, 4.41], [4.48, 4.45]];
var points109 = [[4.65, 4.23], [4.49, 4.44]];

var pill101 = EXTRUDE([2.05])(bs2([points108, points109]));

var mvr3_pillows = STRUCT([COLOR(BLACK), T([2])([0.16]), pill100, pill101]);

//legs

var points110 = [[2.91, 3, 0], [2.55, 5.35, 0], [2.55, 5.59, 0], [4.78, 5.32, 0]];

var points111 = [[2.91, 3, 0.05], [2.55, 5.35, 0.05], [2.55, 5.59, 0.05], [4.78, 5.32, 0.05]];

var points112 = [[2.96, 3, 0.05], [2.6, 5.3, 0.05], [2.6, 5.54, 0.05], [4.78, 5.27, 0.05]];

var leg003 = bs3([points110, points111, points112]);

var points113 = [[3.01, 3, 0.05], [3.01, 5.25, 0.05], [2.65, 5.49, 0.05], [4.78, 5.22, 0.05]];

var points114 = [[3.01, 3, 0], [3.01, 5.25, 0], [2.65, 5.49, 0], [4.78, 5.22, 0]];

var leg004 = bs3([points112, points113, points114]);

DRAW(leg004);








var mvr3_chair = STRUCT([mvr3_pillows]);

DRAW(mvr3_chair);