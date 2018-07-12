//Author: Khalil Tavarez

var readline = require("readline-sync");

var SurfaceArea = 0;
var Volume = 0;

//Prompt the user on wether they want to find the surface area or volume of a sphere or a cylinder
const userWant =  parseInt(readline.question("Enter 1 if you want volume or 2 if you want the surface area"));
const radi = parseInt(readline.question("What is the radius"));
const height = parseInt(readline.question("What is the height"));

//Volume of a cylinder = π(r^2)h
//Surface area of a cylinder = 2πrh + 2πr^2


if (userWant == 1) {
  Volume = (radi ** 2) * height;
  Volume *= Math.PI;
  console.log("The volume of the cylinder with the radi of " + radi + " and the height of " + height + " is " + Volume);
} else {
  SurfaceArea = 2 * Math.PI * radi * height;
  SurfaceArea += 2 * Math.PI * (radi ** 2)
  console.log("The surface area of the cylinder with the radi of " + radi + " and the height of " + height + " is " + SurfaceArea);
}
