var readline = require("readline-sync");

var userNum = parseInt(readline.question("Please enter an interger? "));
var root = Math.sqrt(userNum);

if (root % 1 == 0) {
  console.log(userNum + " is a perfect and its root is " + root);
} else {
  console.log(userNum + " is not a perfect square");
}