var readline = require("readline-sync");
var randomInt = require('random-int');

var score = 0;

//Game Start
console.log("Lets play a game of Square Enix trivia!");
console.log("You didnt want to play? Too bad");

var ToF1 = readline.question("True or False. Square Enix is a Japanese entertainment company mostly specializing in developing, distributing, and publishing video games");

console.log("They are most famous for which series");
console.log("1.Mario");
console.log("2.Metal Gear");
console.log("3.Resident Evil");
var MP1 = readline.question("4.Final Fantasy ");

var ToF2 = readline.question("True or False. Kingdom Hearts 3 is finally coming out in 2019 after a decade of waiting ");

if (ToF1) {
  score++;
}
if (MP1 == 4) {
  score++;
}
if (ToF2) {
  score++;
}

console.log("You answered " + score + " out of a possible 3");