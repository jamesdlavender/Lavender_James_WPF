// Name: James Lavender
// 5/29/2013
// Functions Worksheet
// Stung!

// JavaScript

// Calculating the total amount of bee stings using the bee stings per pound and the total weight of an animal.

var beeStings = 8.666666667; // Number of bee stings per pound.
var animalPounds = 400; // How much the animal weighs in pounds.

var calcStings = function(beeStings, animalPounds){ // Defining the function.
	//Code the function runs. Stings times Pounds equals the number of Stings total.
	var overallStings = beeStings * animalPounds; // Piece of code that actually multiplies the stings with the pounds.
	return overallStings; // Returns the total amount of stings.
}

var a = calcStings(8.666666667, 400); // Piece of code that is invoked.

console.log("It takes " + a + " bee stings to kill a " + animalPounds + "lbs. animal."); // Tells to output an answer into console.