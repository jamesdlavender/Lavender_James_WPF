// Name: James Lavender
// 5/23/2013
// Conditionals Worksheet
// Conditionals Wacky

//

var mallowsAte = prompt ("Please enter now many marshmellows you think you can fit in your mouth.");
var minMallows = 20;
var maxMallows = 40;

if(mallowsAte < minMallows ){
	alert("You didin't eat enough marshmallows! You Lost!")
}else if(mallowsAte > maxMallows ){
	alert("You ate to many marshmallows! You Lost!")
}else{
	alert("You didn't eat the max amount of marshmallows but you ate more than the minimum amount. You WIN!")
}