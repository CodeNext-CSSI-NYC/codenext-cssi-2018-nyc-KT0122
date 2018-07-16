// 1. We did this last time, but we are going to do it again to make sure you can.
// Do not look back and copy. Then you would not be learning.
// Ask the user to guess a password.
// Keep asking them until they get it right.
// At the end, tell them how many guesses it took them.
function password() {
  var password = "kek";
  var passwordGuessed = false;
  var tries = 0;
  while (!passwordGuessed) {
    var readline = require("readline-sync");
    var guess = readline.question("Please enther the password: ");
    console.log(guess);
    if (password == guess) {
      passwordGuessed = true;
    }
    tries++;
  }
}
// password();

// 2. Make a for loop that prints out the numbers from 0 to 9.
function two() {
  for (var i = 0; i <= 9; i++) {
    console.log(i);
  }
}
// two();

// 3. Make a for loop that prints out the even numbers from 0 to 100.
// Note that there are two ways to do this. One way is to use i += 2 instead of i++.
// This makes i go up by two each time, so that it skips odd numbers.
// The other way is to use an if statement inside the for loop that only prints
// even numbers. Make sure you can do it both ways. (As in, actually do it both ways.)

function three() {
  for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }

  for (var i = 2; i <= 100; i += 2) {
    console.log(i);
  }
}


// 4. Make a variable called sum that is equal to 0.
// Keep asking the user to enter in numbers until all of the numbers they have typed in
// add up to more than 100 in total.
// For example, it might end after two times through the loop if I type 77, 44.
// But it might take many more attempts if I type 1, 1, 1, 1, 1 ....

function sumTillHundred() {
  var sum = 0;
  while (sum < 100) {
    var readline = require("readline-sync");
    sum += parseInt(readline.question("Input a number"));
  }
}
// sumTillHundred();

// 5a. Use a loop to make this pattern:
// *
// **
// ***
// ****
// *****
// ******

function starline() {
  for (var i = 0; i < 6; i++) {
    var stars = "";
    for (var x = 0; x <= i; x++) {
      stars += "*";
    }
    console.log(stars);
  }
}
// starline

// 5b. Use a loop to make this pattern:
// ***********
//
// ***********
//
// ***********
//
// ***********
//
// ***********
//
// ***********
//
// ***********
//

function lineStars() {
  for (var i = 1; i <= 14; i++) {
    if (i % 2 != 0) {
      console.log("***********");
    } else {
      console.log();
    }
  }
}
// lineStars();

// 6. Use this line:
// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Set up a for loop that goes through this string.
// Do not use 26 or 25 in your for loop. Instead use the .length property of strings.
// Inside the for loop, store the corresponding letter for each index in a variable called letter.
// Then, print out the toLowerCase() version of each letter.
// You should see the alphabet, in lower case, with a new letter on each line.

function lowerCaseAlphabet() {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < alphabet.length; i++) {
    console.log(alphabet.charAt(i).toLowerCase())
  }
}

// lowerCaseAlphabet();

// 7. Last time we listed out all of the factors of a number.
// This time we will do something similar: we will check if a number is a perfect number.
// A perfect number is one where all of the factors (other than the number itself)
// add up to the number itself.
// We will write a function that returns true or false, depending on whether or not it is perfect.
// See https://en.wikipedia.org/wiki/List_of_perfect_numbers if you want to.
// 6 is perfect: 1 + 2 + 3 = 6.
// 28 is too: 1 + 2 + 4 + 7 + 14 = 28
// No other small numbers are.
// Write a function that takes in a number uses a for loop to go through the
// values from 1 to number - 1 and add together all the ones that are factors of
// number. Return true if this sum is equal to number, false otherwise.
// Make sure it returns true for 6 and 28 and false for pretty much anything else.

function perfect(num) {
  var sum = 0;
  for (var i = 1; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  if (sum == num) {
    return true;
  } else {
    return false;
  }
}

console.log(perfect(496));