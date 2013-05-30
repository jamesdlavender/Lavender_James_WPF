// Name: James Lavender
// 5/29/2013
// Assignment: Functions
// Industry

// JavaScript

// Volume of an Office Building.

var width = prompt ("Please enter the width of the building.");
var height = prompt ("Please enter the height of the building.");
var depth = prompt ("Please enter the depth of the building.");

var calcVolume = function(width, height, depth){ // Defining the function.
	var volume = width * height * depth;
	return volume;
}

var a = calcVolume(width, height, depth); // This invokes the function.

//(var <= var) ? alert() : alert();

console.log(a); // This outputs to console.