// Name: James Lavender
// 5/16/2013
// Functions Worksheet
// Circumference

// JavaScript

var radius = 7; // Radius of the circle is 7.
var pi = 3.14; // Pi is required to find the circumference of a circle.

var calcCircle = function(radius, pi){
	// This calculates the circumference of a circle by multiplying.
	var circumference = radius * pi;
	return circumference;
}

var a = calcCircle(7, 3.14) // This invokes the function.

console.log("The circumference of the circle is " + a); // This outputs to console.