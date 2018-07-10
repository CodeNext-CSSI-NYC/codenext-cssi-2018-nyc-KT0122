// Author: Khalil Tavarez
//Package call
var readline = require("readline-sync");

//User prompt for variables
const a = parseInt(readline.question("Enter a:"));
const b = parseInt(readline.question("Enter b:"));
const c = parseInt(readline.question("Enter c:"));

// Pythagorean Theorem a^2 + b^2 =  c^2
var a2 = a ** 2;
var b2 = b ** 2;
var c2 = c ** 2;

if(a2 + b2 == c2){
  console.log("Yes this is a Pythagorean Triangle");
}
else {
  console.log("No this is not a Pythagorean Triangle");
}
