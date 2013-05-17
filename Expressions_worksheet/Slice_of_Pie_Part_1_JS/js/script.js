// Name: James Lavender
// 5/16/2013
// Expression Worksheet
// Slice Of Pie Part 1

// JavaScript

var slicesPizza = 12; // Slices per pizza which is 12.
var peopleParty = 30; // People at the party which is 30.
var pizzaOrdered = 4; // Pizzas that were ordered which is 4.

var firstPart = "Each person ate" // First part of sentence.
var lastPart = "slices of pizza at the party." // Last part of sentence.

var answer = (pizzaOrdered * slicesPizza)/peopleParty; // Pieces per person.

var fullSentence = firstPart + " " + answer + " " + lastPart;

console.log(fullSentence); // Answer is 1.6