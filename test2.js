//first argument file name second name 


//input filename : list of groceries, groceries return true
//input filename: list of grocers, fist rerturn false
//input filename: lapple, al return true




function nameInFile (file, name) {
	var filename =file.split(''); 
	var lettername = name.split(''); 
	var count = 0, fp =0; 
	//first element in name compares to each elelemtn in filename second element , third forth fifth,  placements of the found elements is consective then it's true
	for (var j = 0; j < lettername.length; j ++) {
		if(filename.indexOf(lettername[j]) > -1) {
			console.log("testing:"); 
			console.log(lettername[j]);
			fp = filename.indexOf(lettername[j]); 
			console.log(fp); 
			filename.splice(0,fp); 
			console.log(filename);
			count++; 
		}
	}
	console.log(count); 
	console.log(lettername.length);
	console.log(filename);
	if(count == lettername.length) {
		return true; 
	}
	return false; 
}
var fn = "lapple";
var n = "al"; 
nameInFile(fn,n);