// Read about Yahtzee at https://en.wikipedia.org/wiki/Yahtzee
// It will help if you have a basic idea of how the game works.
var randomInt = require('random-int');

// 1. Write a function that rolls a single six-sided die and returns the result.
function rollDie() {
  var roll = randomInt(1, 6);
  return roll;
}

// 2. Write a function that rolls five separate dice and returns the result in an array.
// This function should in turn call the function from #1 above.
function rollFiveDice() {
  var fiveRolls = [];
  for (var i = 0; i < 5; i++) {
    fiveRolls.push(rollDie());
  }
  return fiveRolls;
}
// An example return value is [2,3,5,1,2];



// 3. Write a function that takes in an array of five dice rolls and returns an
// object in which the keys are the rolls and the values are the frequency of the rolls.
// So if the array passed in is [2,3,5,1,2], then the return from this function is:
// {2: 2, 3: 1, 5: 1, 1: 1} because two appears twice and 1/3/5 appear once.
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
// You should test out this function by first calling the function in #2,
// storing the result in a variable, then calling this function and passing in that
// variable as the input to this function.

let count = createCounts(rollFiveDice());
console.log(count);

// Note: I will refer to the object returned by #3 above as a "counter object"
// from here on out. I will be referring to it a lot. A "counter object" has keys
// that are the numbers of the dice, and values that represent how many of the five
// dice rolled that number. So the values should always add up to 5.



// 3b. Write a function isValid that takes in a counter object and checks that the values add up to 5.
// It should return true or false. For example, if you pass in {2: 2, 3: 1, 5: 1, 1: 1}
// it should return true, but {2: 2, 3: 1, 5: 1, 1: 2} should return false.
// Feel free to use this function anywhere else in the code if you'd like.
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

console.log(isValid(count));


// 4. Write a function that determines whether or not a counter object contains
// a two-of-a-kind. This means that at least one of the counts is 2 or higher.
function hasTwoOfAKind(obj) {
  var keys = Object.keys(obj);
  var values = Object.values(obj);

  for (var i = 0; i < values.length; i++) {
    if (values[i] == 2) {
      return true;
    }
  }
  return false;
}

// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasTwoOfAKind({1:3, 2:1, 6:1}) and make sure it says true.

console.log("Has two of a kind: " + hasTwoOfAKind(count));

// 5. Write a function that determines whether or not a counter object contains
// a three-of-a-kind. This means that one of the counts is 3 or higher.
function hasThreeOfAKind(obj) {
  var values = Object.values(obj);

  for (var i = 0; i < values.length; i++) {
    if (values[i] == 3) {
      return true;
    }
  }
  return false;
}

// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasThreeOfAKind({1:3, 2:1, 6:1}) and make sure it says true.
console.log("Has three of a kind: " + hasThreeOfAKind(count));


// 6. Write a function that determines whether or not a counter object contains
// a four-of-a-kind. This means that one of the counts is 4 or higher.
function hasFourOfAKind(obj) {
  var values = Object.values(obj);

  for (var i = 0; i < values.length; i++) {
    if (values[i] == 4) {
      return true;
    }
  }
  return false;
}

// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasFourOfAKind({1:3, 2:1, 6:1}) and make sure it says false and make another
// one that does have it.
console.log("Has four of a kind: " + hasFourOfAKind(count));


// 7. Write a function that determines whether or not a counter object contains
// a yahtzee (all five are the same). This means that one of the counts is 5.
function hasYahtzee(obj) {
  var values = Object.values(obj);
  if (values.length == 1) {
    return true;
  }
  return false;
}

// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasYahtzee({1:5}) and make sure it says true.
console.log("Has Yahtzee: " + hasYahtzee(count));



// 8. Write a function that determines whether or not a counter object contains
// a full house. This means that one of the counts is 3 and a different one is 2.
function hasFullHouse(obj) {
  if (hasTwoOfAKind(obj) && hasThreeOfAKind(obj)) {
    return true;
  }
  return false;
}

// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasFullHouse({1:3, 5:2}) and make sure it says true.
console.log("Has full house: " + hasFullHouse(count));


// 9. Write a function that determines whether or not a counter object contains
// a small straight. This means that either all of the values from 1-4 appear at least once,
// or all the values from 2-5 appear at least once, or all the values from 3-6 appear at least once.
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

// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasFullHouse({3:1, 4:1, 5:2, 6:1}) and make sure it says true.

// console.log(hasSmallStraight({
//   3: 1,
//   4: 1,
//   5: 2,
//   6: 1
// }));
console.log("Has a small straight: " + hasSmallStraight(count));

// 10. Write a function that determines whether or not a counter object contains
// a large straight. This means that either all of the values from 1-5 appear at least once,
// or all the values from 2-6 appear at least once.
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

// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasFullHouse({2:1, 3:1, 4:1, 5:1, 6:1}) and make sure it says true.

// console.log(hasLargeStraight({
//   2: 1,
//   3: 1,
//   4: 1,
//   5: 1,
//   6: 1
// }));
console.log("Has a large straight: " + hasLargeStraight(count));