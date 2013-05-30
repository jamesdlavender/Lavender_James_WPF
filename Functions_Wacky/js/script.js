// Name: James Lavender
// 5/29/2013
// Assignment: Functions
// Wacky

// JavaScript

// 
var gumSticks = prompt("How many pieces of gum are in a pack?");
var gumPacks = prompt("How many packs of gum?");
var gumChews = 100;
var maxChews = 30000;

var calcChews = function(gumSticks, gumPacks, gumChews){ // Defining the function. Anonymous function.
	var total = gumSticks * gumPacks * gumChews; // The actual multiplying.
	return total;
}

var totalChews = calcChews(gumSticks, gumPacks, gumChews); // Named function.


(totalChews <= maxChews) ? alert("Your jaw is safe! You didn't chew too much! :]") : alert("Your jaw is about to fall off, you chewed to much! :[");