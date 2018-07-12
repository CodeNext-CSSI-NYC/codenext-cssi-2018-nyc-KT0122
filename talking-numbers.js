// Author: Khalil Tavarez
let readline = require("readline-sync");

/******************************************************************************
                                  printGreeting()

  Prints a simple greeting. Be as creative as you want here. Be sure to include
  your name as the author!
*******************************************************************************/
function printGreeting() {
  console.log("Greeting I am the author, Khalil");
}


/******************************************************************************
  This function takes a number between 1 and 9 (inclusive) as input and returns
  that same number in word form. If the number is not between 1 and 9, the
  function returns an empty string, which is just "".

  Examples:
  sayZeroNine(5) → "five"
  sayZeroNine(8) → "eight"
  sayZeroNine(13) → ""
*******************************************************************************/
function sayZeroNine(num) {
    switch (num) {
      case 1:
        return "one";
        break;
      case 2:
        return "two";
        break;
      case 3:
        return "three";
        break;
      case 4:
        return "four";
        break;
      case 5:
        return "five";
        break;
      case 6:
        return "six";
        break;
      case 7:
        return "seven";
        break;
      case 8:
        return "eight";
        break;
      case 9:
        return "nine";
        break;
      default:
        return "";
      }
}


/******************************************************************************
  This function takes a number between 10 and 19 (inclusive) as input and returns
  that same number in word form. If the number is not between 10 and 19, the
  function returns an empty string, which is just "".

  Examples:
  sayTenNineteen(11) → "eleven"
  sayTenNineteen(15) → "fifteeen"
  sayTenNineteen(25) → ""
*******************************************************************************/
function sayTenNineteen(num) {
    switch (num) {
      case 10:
        return "Ten";
        break;
      case 11:
        return "eleven";
        break;
      case 12:
        return "twelve";
        break;
      case 13:
        return "thirteen";
        break;
      case 14:
        return sayZeroNine(4) + "teen";
        break;
      case 15:
        return sayZeroNine(5) + "teen";
        break;
      case 16:
        return sayZeroNine(6) + "teen";
        break;
      case 17:
        return sayZeroNine(7) + "teen";
        break;
      case 18:
        return sayZeroNine(8) + "teen";
        break;
      case 19:
        return sayZeroNine(9) + "teen";
        break;
      default:
        return "";
  }
}


/******************************************************************************
  This function takes a number between 2 and 9 (inclusive) as input and returns
  that same number in word form, but in the tens place. If the number is not
  between 2 and 9, the function returns an empty string, which is just "".

  Examples:
  sayTwentyNinety(5) → "fifty"
  sayTwentyNinety(8) → "eighty"
  sayTwentyNinety(1) → ""
*******************************************************************************/
function sayTwentyNinety(num) {
    switch (num) {
      case 2:
        return "twnety";
        break;
      case 3:
        return "thirty";
        break;
      case 4:
        return "fourty";
        break;
      case 5:
        return "fifty";
        break;
      case 6:
        return "sixty";
        break;
      case 7:
        return "seventy";
        break;
      case 8:
        return "eighty";
        break;
      case 9:
        return "ninety";
        break;
      default:
        return "";
    }
}


/******************************************************************************
  This function calls the three functions above to convert an entire number (num)
  into word form, then returns that word. This function should be able to handle
  numbers from 0 to 9999 (inclusive).

  To do this, first declare a variable named wordForm at the top of the
  function. This will be the string you will return at the end of the function,
  so initialize it to an empty string at the start: let wordForm = "";

  Your first conditional statement should check if num is equal to 0. If so,
  set wordForm to the string "zero".

  Otherwise, build the word form of num by chopping num into thousands,
  hundreds, tens, and ones. Convert each place value number to a word by calling
  the three functions above, and concatenate each word with the wordForm variable.

  At the very end of your function it should simply return wordForm.

  Examples:
  sayNumber(0) → "zero"
  sayNumber(9999) → "nine-thousand nine-hundred ninety-nine"
  sayNumber(75) → "seventy-five"
*******************************************************************************/
function sayNumber(num) {
  var finalWord;

  if (num == 0) {
    return "zero";
  }
  //Check if theres a thousands place
  if (num / 1000 >= 1) {
    finalWord += sayZeroNine(num / 1000) + "-thousand ";
    num %= 1000;
  }
  //Check if theres a hundreds place
  if (num / 100 >= 1) {
    finalWord += sayZeroNine(num / 100) + "-hundred";
    num %= 100;
  }
  //Check if theres a tens place
  if (num / 10 >= 1) {

  }

}


/******************************************************************************
  This function simply runs your program. At the very least it should greet the
  user, ask the user to enter a number between 0 and 9999, then print that
  number in word form.
*******************************************************************************/
function run() {

}

// Call the run() function to run the program.
run();
