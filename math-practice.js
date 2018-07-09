// Under each question, write the code that solves it, and then write your answer in a comment
// For example, if the question is: What's the sum of 79 and 2018 you would write:
console.log(79 + 2018);
// 2097

// Some of the questions will use these variables
const p = 12;
const q = 60;
const r = 25;

// 1. Is 91 divisible by 13? (The answer should be either true or false)
console.log(91 % 13 == 0);
//False

// 2. What is the result when the q divided by r is rounded to the nearest integer?
console.log(Math.round(q/r));
//2

// 3. Is the product of p and r greater than q squared? (The answer should be either true or false)
var product = p * r;
var qSquared = Math.pow(2, q);
if(product > qSquared)
  console.log(true);
else
  console.log(false);
//False

// 4. What is the remainder when the sum of q and r is divided by p?
console.log((q + r) % p);
//1

// 5. 27 squared is equal to what number raised to the third power?
console.log(Math.cbrt(27 **2 ));
//

// 6. What is the absolute value of p - q? (Find out how to do absolute value by searching online.)
console.log(Math.abs(p-q))
// 48

// 7. Find another math operation we haven't talked about yet on the MDN (Mozilla Developer Network) and try it out below.
console.log(Math.random());
//Prints a random value between 0 and 1
