var readline = require("readline-sync");
var randomInt = require('random-int');

var roll = randomInt(1,6);
var oldRoll = roll;

console.log("The die landed on " + roll);
var userGuess = readline.question("Will the next roll be higher, lower, or the same? ");
userGuess = userGuess.toLowerCase();

roll = randomInt(1,6);

if (oldRoll > roll && userGuess == "higher"){
  console.log("You guessed right it was higher");
} else if (oldRoll < roll && userGuess == "lower"){
  console.log("You guessed right it was lower");
} else if (oldRoll == roll && userGuess == "same"){
  console.log("You guessed right it was the same");
} else {
  console.log("You guessed wrong, the new role was " + roll + " and the old roll was " + oldRoll + " and you said " + userGuess);
}
