//LEVEL1
//question 1
var planets = "Neptune";

//question 2
var person = {
	hairColour: "brown"
};
//question 3
var outOfStock = true;

if (outOfStock === true) {
	console.log("Out Of Stock");
} else {
	console.log("In Stock");
}
//question 4
var evenNumbers = [2, 4, 6, 8, 10];

for (var i = 0; i < evenNumbers.length; i++) {
	console.log(evenNumbers[i]);
}

//question 5
for (var looper = 15; looper <= 25; looper++) {
	console.log(looper);
	if (looper === 20) {
		console.log(looper);
	} else {
	}
}

//question 6
for (var looper = 15; looper <= 25; looper++) {
	if (looper === 20) {
		console.log(looper);
	} else {
	}
}
//question 7
var peters = [
	{
		lastName: "Pan",
		age: 13,
		cool: true
	},
	{
		lastName: "Pettigrew",
		age: 38,
		cool: false
	}
];
for (var petersIndex = 0; petersIndex < peters.length; petersIndex++) {
	console.log(peters[petersIndex].age);
	console.log(peters[petersIndex].cool);
}

//question 8
function whatIDontLike(slightIrritations) {
	console.log("I don't like " + slightIrritations);
}
whatIDontLike("catching on fire");

//question 9
function subtract(number1, number2) {
	var sum = number1 - number2;
	console.log(sum);
}
subtract(8, 3);
//question 10

var emptyarray = [];

function paint(colour) {
	emptyarray.push(colour);
}
paint("green");
console.log(emptyarray);

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
