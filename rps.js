var readline = require("readline-sync");
var randomInt = require('random-int');

var userChoice = readline.question("Rock, Paper, or Scissors");
userChoice = userChoice.toLowerCase();

var rng = randomInt(1,3);
var computerChoice = rng;

if(userChoice == "rock"){
  userChoice = 1;
}
else if(userChoice == "paper"){
  userChoice = 2;
}
else {
  userChoice = 3;
}

if(userChoice == computerChoice){
  console.log("Its a tie you and the computer chose the same thing");
}
else if(userChoice == 1){
  if(computerChoice == 2) {
    console.log("The computer chose paper, you lost");
  }
  else {
    console.log("The computer chose scissors, you won")
  }
}
else if(userChoice == 2) {
  if(computerChoice == 1) {
    console.log("The computer chose rock, you won");
  }
  else {
    console.log("The computer chose scissors, you lost");
  }
}
else {
  if(computerChoice == 1){
    console.log("The computer chose rock, you lost");
  }
  else {
    console.log("The computer chose paper you won");
  }
}
