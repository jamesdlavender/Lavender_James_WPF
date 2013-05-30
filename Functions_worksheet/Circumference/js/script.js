// Name: James Lavender
// 5/16/2013
// Functions Worksheet
// Circumference

// JavaScript

var radius = 7;
var pi = 3.14;

var calcCircle = function(radius, pi){
	var circumference = radius * pi;
	return circumference;
}

var a = calcCircle(7, 3.14)

console.log("The circumference of the circle is " + a);