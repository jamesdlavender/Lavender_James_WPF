// Name: James Lavender
// 5/29/2013
// Functions Worksheet
// Stung!

// JavaScript

var beeStings = 8.666666667; // Number of bee stings per pound.
var animalPounds = 400; // How much the animal weighs in pounds.

var calcStings = function(beeStings, animalPounds){
	//Cod the function runs. Stings times Pounds equals the number of Stings total.
	var overallStings = beeStings * animalPounds;
	return overallStings; // Returns the total amount of stings.
}

var a = calcStings(8.666666667, 400); // Piece of code that is invoked.

console.log("It takes " + a + " bee stings to kill a " + animalPounds + "lbs. animal."); // Tells to output an answer into console.