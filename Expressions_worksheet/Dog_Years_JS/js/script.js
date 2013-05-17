// Name: James Lavender
// 5/16/2013
// Expression Worksheet
// Dog Years

// JavaScript

var actualAge = 2; // Sparky's actual age which is 2.
var dogAge = 7; // Dogs age 7 time faster than humans.
var firstPart = "Sparky is" // First part of sentence.
var middlePart = "human years old which is" // Middle part of sentence.
var lastPart = "in dog years." // Last part of snetence.

// Sparky's age in dog years.
var ageAnswer = actualAge * dogAge; //Answer to how old is Sparky in dog years.

var fullSentence = firstPart + " " + actualAge + " " + middlePart + " " + ageAnswer + " " + lastPart; // Entire statement with answers.

console.log(fullSentence);