console.log("ESERICIZIO 02");

for (var i = 1; i<=10; i++){
	var s = "";
	for (var j = 1; j<=10; j++){
		s+=((i*j));
		if (j!=10) s+=",";
		s+="\t";
	}
	console.log(s+"\n");
}