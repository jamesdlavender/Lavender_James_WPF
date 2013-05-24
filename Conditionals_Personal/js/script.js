// Name: James Lavender
// 5/23/2013
// Conditionals Worksheet
// Conditionals Personal

// You must have a certain IQ to pass the test.

var yourIQ = prompt ("Please enter your IQ."); // The will ask the user to type in his or her IQ.

var reqiredIQ = 130; // This is the reqired IQ.

if (yourIQ >= reqiredIQ){
	// If their IQ is greater or equals to the reqired IQ then they pass.
	alert("You have the required IQ to pass the test.")
}else{
	// If their IQ is lower then they do not pass.
	alert("You do not have the required IQ to pass the test.")
}
