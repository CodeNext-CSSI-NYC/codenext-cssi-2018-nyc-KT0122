var readline = require("readline-sync");
var randomInt = require('random-int');

var userChoice = readline.question("Heads or Tails");
userChoice = userChoice.toUpperCase();
var computerChoice;

/*
if(userChoice == "Heads") {
  computerChoice == "Tails";
}
else {
  computerChoice == "Heads";
} */

var rng = Math.random();
var result = "temp";

if(rng < .5) {
  result = "HEADS";
} else {
  result = "TAILS";
}

if(result == userChoice) {
  console.log("You won player");
} else {
  console.log("The computer won");
}
