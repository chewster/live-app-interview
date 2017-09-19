//intersection of 2 arrays ai = [a,b,c] b2 = [b,c,d] 

function sameLetter(a,b) {
	var temp = [];
	var hash= {}; 
	for (var i= 0; i<a.length; i++) {
		if(!hash[a[i]]) {
			hash[a[i]] =1; 
		}
		else{
			hash[a[i]] +=1; 
		}
	}
	for (var j = 0; j < b.length; j++) {
		if(hash[b[j]]) {
			temp.push(b[j]); 
		}
	}
	return temp; 

}

var test_a = ["a","d","q","p"];
var test_b = ["d","r","l","a"]; 

sameLetter(test_a, test_b);
