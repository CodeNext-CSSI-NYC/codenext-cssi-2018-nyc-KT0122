// Use a for loop to simulate flipping a coin 100 times.
// Think carefully about how you could use Math.random() or random-int to do this.
// (There are several possible answers.)
// Keep track of how many of the flips are heads.
// Print out the total number of flips and the total number of heads at the end.
// How often is it exactly 50/100? Fun fact: this should only happen about 8% of the time.
let randomInt = require("random-int");
var headCount = 0;
var tailCount = 0;
for (var i = 0; i < 100; i++) {
  var current = randomInt(1, 2);
  if (current == 1) {
    headCount++;
  } else {
    tailCount++;
  }
}
console.log("Heads: " + headCount);
console.log("Tails: " + tailCount);
console.log("The chances are: " + headCount + "/" + tailCount);