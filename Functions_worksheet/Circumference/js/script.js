// Name: James Lavender
// 5/16/2013
// Expression Worksheet
// Discounts

// JavaScript

var itemName = "Speakers"

var originalPrice = 87.99
var discountPercent = 0.35
var salesTax = 0.5

var withoutTax = originalPrice - (originalPrice * discountPercent);

var withTax = withoutTax + (withoutTax * salesTax)

// Sentence structure.

var firstPart = "Your"
var secondPart = "were originally $"
var thirdPart = ", but after a"
var forthPart = "% discount, they are now $"
var fifthPart = "without tax, and $"
var sixthPart = "with tax."

// Full statement.

var fullSentence = firstPart + " " + itemName + " " + secondPart + originalPrice + thirdPart + " " + discountPercent + forthPart + withoutTax + " " + fifthPart + withTax + " " + sixthPart 

console.log(fullSentence);