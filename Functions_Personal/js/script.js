// Name: James Lavender
// 5/29/2013
// Assignment: Functions
// Personal

// JavaScript

// This includes an else if, anonymous function, named function.


var calories = prompt("How many calories do you consume a week?")
var weeks = 4; // How many weeks are in a month.
var caloriesMin = 10000; // Min calories.
var caloriesMax = 80000; // Max calories.

var calcCal = function(weeks, calories){ // Defining the function. Anonymous function.
	var total = weeks * calories; // The actual multiplying.
	return total;
}

var totalCal = calcCal(weeks, calories); // Named function.

if (totalCal > caloriesMin && totalCal < caloriesMax){
	// This will determindif you have met the calorie goal.
	alert("You have successfully completed your monthly goal!");
}else if(totalCal != caloriesMin){ // else if.
	// If you have below the min calories then this will show.
	alert("You did not consume enough calories for the month!");
}else{
	// If you have consumed more than 80000 this will show.
   	alert("You have failed your goal for the month!");
}
