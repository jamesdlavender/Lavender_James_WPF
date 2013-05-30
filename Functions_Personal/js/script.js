// Name: James Lavender
// 5/29/2013
// Assignment: Functions
// Personal

// JavaScript

var week1 = prompt("Did you go over the max calories which was 10000? \n\nYour calores for the first week?");
var week2 = prompt("Your calories for the second week?");
var week3 = prompt("Your calories for the third week?");
var week4 = prompt("Your calories for the fourth week?");
var calorieMax = 10000;

var calcTotal = function(week1, week2, week3, week4){ // Defining the function.
	var total = week1 + week2 + week3 + week4;
	return total;
}

var a = calcTotal(week1, week2, week3, week4);

(a >= calorieMax) ? alert("You did not go over the calorie limit " + calorieMax + " your total was " + a + "." ) : alert("You went over the " + calorieMax + " calorie limit!");