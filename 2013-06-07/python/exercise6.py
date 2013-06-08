def lar_to_obj(larModel):
	vertices, facets = larModel
	s = ""
	for vert in vertices :
		if len(vert) == 2 :
			s += "v "+str(vert[0])+" "+str(vert[1])+" 0\n"
		else :
			if len(vert) == 3 : 
				s += "v "+str(vert[0])+" "+str(vert[1])+" "+str(vert[2])+"\n"
			else :
				s += "v "+str(vert[0])+" "+str(vert[1])+" "+str(vert[2])+" "+str(vert[3])+"\n"
	s += "\n"
	for facet in facets :
		s += "f "
		for el in facet :
			s += str(el)+" "
		s += "\n"
	return s

# example

FV = [[5,6,7,8],
[0,5,8],
[0,4,5],
[1,2,4,5],
[2,3,5,6],
[0,8,7], [3,6,7], [1,2,3], [0,1,4]
]

V = [[0,6],
[0,0],
[3,0],
[6,0],
[0,3],
[3,3],
[6,3],
[6,6],
[3,6]]

l = lar_to_obj([V, FV])

print(l)