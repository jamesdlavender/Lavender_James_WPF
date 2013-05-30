// Name: James Lavender
// 5/16/2013
// Functions Worksheet
// Stung!

// JavaScript

var beeStings = 8.666666667; // Number of bee stings per pound.
var animalPounds = 400; // How much the animal weighs in pounds.

var calcStings = function(beeStings, animalPounds){
	//Cod the function runs. Stings times Pounds equals the number of Stings total.
	var overallStings = beeStings * animalPounds;
	return overallStings;
}

var a = calcStings(8.666666667, 400);

console.log("It takes " + a + " bee stings to kill a " + animalPounds + "lbs. animal.");