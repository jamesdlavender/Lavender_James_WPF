// Name: James Lavender
// 5/16/2013
// Expression Worksheet
// Slice Of Pie Part 2

// JavaScript

var slicesPizza = 12; // Slices per pizza which is 12.
var peopleParty = 30; // People at the party which is 30.
var pizzaOrdered = 4; // Pizzas that were ordered which is 4.

var firstPart = "Sparky got" // First part of sentence.
var lastPart = "slices of pizza." // Last part of sentence.

var answer = (pizzaOrdered * slicesPizza)%peopleParty; // Remainer pieces of pizza for Sparky.

var fullSentence = firstPart + " " + answer + " " + lastPart; // Full statement with answers.

console.log(fullSentence); // Answer is 18.