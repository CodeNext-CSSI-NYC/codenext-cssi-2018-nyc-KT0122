// MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS

// 1a. Write (declare) a function that prints out "meow"
function catNoise() {
  console.log("meow");
}

// 1b. Call it three times in a row. Run your code to make sure it works.
catNoise();
catNoise();
catNoise();

// 2a. Write (declare) a function that takes one parameter and prints out the square of that number
function squared(num) {
  console.log(num ** 2)
}

// 2b. Call it three times with three different parameters. Run your code to make sure it works.
squared(2);
squared(3);
squared(4);

// 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.
function compare(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
  } else if (num1 < num2) {
    console.log(num2 + " is greater than " + num1);
  } else {
    console.log("Both numbers are the same");
  }
}

// 3b. Call it three times with three different parameters
// Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.
// Run your code to make sure it works.
compare(3, 2);
compare(2, 3);
compare(2, 2);

// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____", with the name in the blank.
function nameReturn(name) {
  return "Hello " + name;
}

// 4b. Call the function and store the result in a variable. Then, print out that variable.
// Repeat this three times with different names.
console.log(nameReturn("Chris"));
console.log(nameReturn("Nicholas"));
console.log(nameReturn("Esteban"));

// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.
function average(num1, num2) {
  return (num1 + num2) / 2;
}

// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?

console.log("The average is " + average(2, 2));
console.log("The average is " + average(10, 5));
console.log("The average is " + average("Apple", "Pie"));