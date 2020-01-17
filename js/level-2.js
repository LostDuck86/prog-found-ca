//LEVEL 2
//Question 1
for (var looper = 15; looper <= 25; looper++) {
	if (looper % 2 === 0) {
		console.log(looper);
	} else {
	}
}

//Question 2
function innerFunction() {
	console.log("I am a function");
}
function outerfunction(firstarguement) {
	firstarguement(innerFunction);
}
outerfunction(innerFunction);
