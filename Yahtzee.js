let randomInt = require('random-int');
let readline = require("readline-sync");
// You must have everything in yahtzee-practice.js working to begin working here.
// Start by copying all of the functions from that file into this file.
// Paste them at the bottom so that you can use them but they don't get in the way.

// 1. This challenge is a bit more open ended. Here is what you should do:
// Roll the 5 dice and show the player the results.
// Ask the player which dice they want to re-roll, and re-roll only those dice.
// Show the player the results again
// Ask again which they want to re-roll, and re-roll only those dice.
// In summary, a player has three chances to roll the dice.
// At the end of these three chances, use all of your functions from the other file
// to inform the player which things they have achieved during this turn.
// For example if they have {4: 4, 6: 1} then they have achieved both a three-of-a-kind
// and a four-of-a-kind during this turn.

function playGame() {

  let playerReRolls = 0;
  let playerSatisfied = false;
  let currentUserRoll = rollFiveDice();
  while (!playerSatisfied && playerReRolls <= 2) {
    let diceToReRoll = readline.question("Please enter the amount of dice you want to re roll as 0-4 with spaces in between: ");
    diceToReRoll = diceToReRoll.split("");
    currentUserRoll = reRoll(diceToReRoll, currentUserRoll);
    if (readline.question("Are you happy with your rolls? ").toLowerCase() == "yes") {
      playerSatisfied = true;
      console.log(playerSatisfied);
    } else {
      playerReRolls++;
    }
  }
  let counts = createCounts([1, 1, 1, 1, 1]);
  checkDice(counts);
}

playGame();

// 2. Once you have this working, play the game a bunch of times and see if you can get
// each of the things we are checking for (full house, small straight, etc.)
// The hardest one to get is Yahtzee, which only happens about 4.6% of the time
// after three rolls if you play correctly,
// according to https://en.wikipedia.org/wiki/Yahtzee#Any_Yahtzee.

function checkDice(rolls) {
  console.log("Two of a kind: " + hasTwoOfAKind(rolls));
  console.log("Three of a kind: " + hasThreeOfAKind(rolls));
  console.log("Four of a kind: " + hasFourOfAKind(rolls));
  console.log("Full House: " + hasFullHouse(rolls));
  console.log("Small Straight: " + hasSmallStraight(rolls));
  console.log("Large straight: " + hasLargeStraight(rolls));
  console.log("Yahtzee: " + hasYahtzee(rolls));
}


// 3. If you want another type of challenge, try showing the results of the rolls
// using ASCII art rather than an array. So instead of telling the user they got
// [2, 3, 5, 2, 1] you could show them using something that looks like
// https://facstaff.bloomu.edu/dcoles/Java/book/chapters/5_decisions/images/dice.png
// This will probably take a while, so make sure you have #1/2 above working first.

function reRoll(arr, rolls) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == " ") {} else {
      rolls[arr[i]] = rollDie();
    }
  }
  console.log(rolls);
  return rolls;
}

function rollDie() {
  var roll = randomInt(1, 6);
  return roll;
}

function rollFiveDice() {
  var fiveRolls = [];
  for (var i = 0; i < 5; i++) {
    fiveRolls.push(rollDie());
  }
  console.log(fiveRolls);
  return fiveRolls;
}

function createCounts(arr) {
  let rollCount = {};
  for (var i = 0; i < arr.length; i++) {
    let currentRoll = arr[i];
    if (currentRoll in rollCount) {
      rollCount[currentRoll]++;
    } else {
      rollCount[currentRoll] = 1;
    }
  }
  return rollCount;
}

function isValid(rollCount) {
  let finalRollCount = 0;
  let arr = Object.values(rollCount);
  for (var i = 0; i < arr.length; i++) {
    finalRollCount += arr[i];
  }
  if (finalRollCount == 5) {
    return true;
  } else {
    return false;
  }
}

function hasTwoOfAKind(obj) {
  var values = Object.values(obj);

  for (var i = 0; i < values.length; i++) {
    if (values[i] == 2) {
      return true;
    }
  }
  return false;
}

function hasThreeOfAKind(obj) {
  var values = Object.values(obj);

  for (var i = 0; i < values.length; i++) {
    if (values[i] == 3) {
      return true;
    }
  }
  return false;
}

function hasFourOfAKind(obj) {
  var values = Object.values(obj);
  for (var i = 0; i < values.length; i++) {
    if (values[i] == 4) {
      return true;
    }
  }
  return false;
}

function hasYahtzee(obj) {
  var values = Object.values(obj);
  if (values.length == 1) {
    return true;
  }
  return false;
}

function hasFullHouse(obj) {
  if (hasTwoOfAKind(obj) && hasThreeOfAKind(obj)) {
    return true;
  }
  return false;
}

function hasSmallStraight(obj) {
  let sum = 0;
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    sum += parseInt(keys[i]);
  }
  if (sum == 10) {
    return true;
  } else if (sum == 14) {
    return true;
  } else if (sum == 18) {
    return true;
  } else {
    return false;
  }
}

function hasLargeStraight(obj) {
  let sum = 0;
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    sum += parseInt(keys[i]);
  }
  if (sum == 15) {
    return true;
  } else if (sum == 20) {
    return true;
  } else {
    return false;
  }
}