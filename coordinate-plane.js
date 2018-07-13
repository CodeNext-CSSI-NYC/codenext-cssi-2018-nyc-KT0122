// Author: Khalil Tavarez

var readline = require("readline-sync");
var Slope = 0;
var Distance = 0;
var Midpoint1 = 0;
var Midpoint2 = 0;

const userFormula = parseInt(readline.question("Would you like to find the slope of the line(1), the lenght of the line(2), or the midpoint of the line(3)?"));

const x1 = parseInt(readline.question("What is the x1"));
const y1 = parseInt(readline.question("What is the y1"));
const x2 = parseInt(readline.question("What is the x2"));
const y2 = parseInt(readline.question("What is the y2"));

//Slope: m = (y2 - y1)/(x2 - x1)
//Distance: d = sqrt((x2 - x1)^2 + (y2 - y1)^2)
//Midpoint: ((x1 + x2) / 2),((y1 + y2) / 2))


//Slope
if (userFormula == 1) {
  Slope = (y2 - y1);
  Slope /= (x2 - x1);
  console.log("m = " + Slope);
} else if (userFormula == 2) {
  //Distance
  Distance = ((x2 - x1) ** 2);
  Distance += ((y2 - y1) ** 2);
  Distance = Math.sqrt(Distance);
  console.log("d = " + Distance);
} else {
  Midpoint1 = (x1 + x2) / 2;
  Midpoint2 = (y1 + y2) / 2;
  console.log("( " + Midpoint1 + " , " + Midpoint2 + " )");
}