var readline = require("readline-sync");
var randomInt = require('random-int');

var score = 0;
var ToF1;
var MP1;
var ToF2;
var gameIsPlayed = true;
var questions = [ToF1, MP1, ToF2];
var currentQuestion = 0;

//Game Start
console.log("Lets play a game of Square Enix trivia!");

while (gameIsPlayed) {

  currentQuestion = questions[randomInt(0, questions.length)];

  switch (currentQuestion) {
    case ToF1:
      ToF1 = readline.question("True or False. Square Enix is a Japanese entertainment company mostly specializing in developing, distributing, and publishing video games ");
      questions.splice(0, 1);
      break;

    case MP1:
      console.log("They are most famous for which series");
      console.log("1.Mario");
      console.log("2.Metal Gear");
      console.log("3.Resident Evil");
      MP1 = readline.question("4.Final Fantasy ");
      break;

    case ToF2:
      ToF2 = readline.question("True or False. Kingdom Hearts 3 is finally coming out in 2019 after a decade of waiting ");
      break
  }

  if (ToF1) {
    score++;
  }
  if (MP1 == 4) {
    score++;
  }
  if (ToF2) {
    score++;
  }
}

console.log("You answered " + score + " out of a possible 3");