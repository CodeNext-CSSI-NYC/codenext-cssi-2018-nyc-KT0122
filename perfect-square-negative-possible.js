var readline = require("readline-sync");

var userNum = parseInt(readline.question("Please enter an interger? "));
var userNumAbs = Math.abs(userNum);
var root = Math.sqrt(userNumAbs);
var userNumNegative = userNumAbs != userNum;

if (userNumNegative) {
  if (root % 1 == 0) {
    console.log(userNum + " would be a perfect square but its negative if it wasnt the root would be " + root);
  } else {
    console.log(userNum + " is not a perfect square");
  }
} else {
  if (root % 1 == 0) {
    console.log(userNum + " is a perfect square and its root is " + root);
  } else {
    console.log(userNum + " is not a perfect square");
  }
}