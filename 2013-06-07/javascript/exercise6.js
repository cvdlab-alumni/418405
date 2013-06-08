var lar_to_obj = function(larModel){
	var vertices = larModel[0];
	var facets = larModel[1];
	var s = "";
	for (var i = 0; i < vertices.length; i++){
		if (vertices[i][2] != null || typeof(vertices[i][2]) != "undefined")
			s += "v "+vertices[i][0]+" "+vertices[i][1]+" "+vertices[i][2]+" "+vertices[i][3]+"\n";
		else if (vertices[i][3] != null || typeof(vertices[i][3]) != "undefined") 
			s += "v "+vertices[i][0]+" "+vertices[i][1]+" 0 "+vertices[i][3]+"\n";
		else s += "v "+vertices[i][0]+" "+vertices[i][1]+" 0 "+"\n";
	}
	s += "\n";
	for (var i = 0; i < facets.length; i++){
		s+="f "
		facets[i].forEach(function(el){
			s += el.toString()+" ";
		});
		s+="\n";
	}
	return(s);
}

