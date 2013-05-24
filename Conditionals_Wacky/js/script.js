// Name: James Lavender
// 5/23/2013
// Conditionals Worksheet
// Conditionals Wacky

// Making sure the user ate an amount in between the min and max of marshmallows.
var mallowsAte = prompt ("Please enter now many marshmellows you think you can fit in your mouth."); // User was asked to enter his or her amount.
var minMallows = 20; // Minimum amount the user can eat.
var maxMallows = 40; // Maximum amount the user can eat.

if(mallowsAte < minMallows ){
	// If the user did not eat enough marshmellows. (User amount less than the min amount.)
	alert("You didin't eat enough marshmallows! You Lost!")
}else if(mallowsAte > maxMallows ){
	// If the user ate to many. (User amount greater than the max amount.)
	alert("You ate to many marshmallows! You Lost!")
}else{
	// This they ate the number in between the min and max.
	alert("You didn't eat the max amount of marshmallows but you ate more than the minimum amount. You WIN!")
}