// Name: James Lavender
// 5/23/2013
// Conditionals Worksheet
// Tire Pressure I

var frontTire1 = prompt ("Please enter the front right tire's PSI."); // Asks the user to type in the Front Right tire's PSI.

var frontTire2 = prompt ("Please enter the front left tire's PSI."); // Asks the user to type in the Front Left tire's PSI.

var rearTire1 = prompt ("Please enter the rear left tire's PSI."); // Asks the user to type in the Rear Right tire's PSI.

var rearTire2 = prompt ("Please enter the rear left tire's PSI."); // Asks the user to type in the Rear Left tire's PSI.

// This figures out if the tire pressure needs to be checked.
if(frontTire1 === frontTire2 && rearTire1 === rearTire2){
	// If the front two tires match tis this will show, this also goes for the two rear tires.
	alert("The tires pass spec!")
}else{
	// If the two front tires do not match this will show, this also goes for the two rear tires.
	alert("Get your tires checked out!")
}