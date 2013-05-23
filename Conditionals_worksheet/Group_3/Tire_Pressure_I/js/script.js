// Name: James Lavender
// 5/16/2013
// Expression Worksheet
// Average Shopping Bill

// JavaScript

// Each shopping bill for each week.

var week1 = 205;
var week2 = 189;
var week3 = 176;
var week4 = 197;
var week5 = 201;

var numberWeeks = 5;

var firstPart = "You have spent a total of $"
var middlePart = "on groceries over 5 weeks. That is an average of $"
var lastPart = "per week."

// The average of all the bills.

var total = week1 + week2 + week3 + week4 + week5;

var average = total / numberWeeks;

var fullSentence = firstPart + total + " " + middlePart + average + " " + lastPart;

console.log(fullSentence);