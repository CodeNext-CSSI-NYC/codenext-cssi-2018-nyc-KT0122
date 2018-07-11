// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.

var readline = require("readline-sync");
//var number1 = parseInt(readline.question("Please enter a number"));
//var number2 = parseInt(readline.question("Please enter another number"));
//var number3 = parseInt(readline.question("Please enter a third number"));
//var letter = readline.question("Please enter a letter");
//var year = parseInt(readline.question("Please enter a year"));
// var citenzenship = parseInt(readline.question("How long have you been a citizen in years?"));
// var age = parseInt(readline.question("How old are you?"));
// var liveInNY = readline.question("True or False do you live in NY");
//var numberDay = parseInt(readline.question("Eneter a whole number between 1 - 7"));

// 1. Ask the user for a number and print whether it is positive or negative or zero.

/*
if(number1 > 0) {
  console.log("This is a positive number");
} else if (number1 < 0) {
  console.log("This is a negative number");
} else {
  console.log("This is 0")
}
*/

// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.

/*
if(number1 >= number2) {
  if(number1 >= number3){
    console.log(number1 + " is the biggest number");
  }
  else {
    console.log(number3 + " is the biggest number");
  }
}
else if(number2 >= number3) {
    console.log(number2 + " is the biggest number");
}
else {
  console.log(number3 + " is the biggest number");
}
*/

// 3. Ask the user for a number and print whether it is odd or even

/*
if(number1 % 2 == 0) {
  console.log("This number is even");
}
else {
  console.log("This number is odd");
}
*/

// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant

/*
var vowels  = ['a','e','i','o','u'];
var isVowel;

for(var i = 0; i < vowels.length; i++) {
  isVowel = (letter == vowels[i]);
  if(isVowel){
    i = 99;
  }
}
if(isVowel) {
  console.log("That letter is a vowel")
}
else {
  console.log("Thats a consonant");
}
*/

// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)

/*
if(year % 4 == 0){
  console.log("That is a leap year");
}
else {
  console.log("That is an average year");
}
*/

// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.

/*
if(citenzenship >= 9) {
  if(age >= 30) {
    if(liveInNY){
      console.log("You can run for senator in NY");
    }
    else{
      console.log("You cannot be an NY senator");
    }
  }
  else{
    console.log("You cannot be an NY senator");
  }
}
else{
  console.log("You cannot be an NY senator");
}
*/

// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.

/*
switch(numberDay) {
  case 1:
      console.log("Monday");
      break;
  case 2:
      console.console.log("Tuesday");
      break;
  case 3:
      console.log("Wednesday");
      break;
  case 4:
      console.log("Thursday");
      break;
  case 5:
      console.log("Friday");
      break;
  case 6:
      console.log("Saturday");
      break;
  case 7:
      console.log("Sunday");
      break;
  default :
      console.log("That wasnt in a whole number in between 1 - 7");

      */
}
