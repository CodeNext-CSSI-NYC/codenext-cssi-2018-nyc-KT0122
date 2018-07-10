//Author: Khalil Tavarez

var readline = require("readline-sync");
var Volume = 0;
var SurfaceArea = 0;

//Prompt the user on wether they want to find the surface area or volume of a sphere or a cylinder
const userObject = parseInt(readline.question("Enter 1 for cylinder or 2 for sphere"));
const userFormula =  parseInt(readline.question("Enter 1 if you want volume or 2 if you want the surface area"));
const radi = parseInt(readline.question("What is the radius"));

if(userObject == 1) {
  const height = parseInt(readline.question("What is the height"));
}

//Volume of a cylinder = π(r^2)h
//Surface area of a culinder = 2πrh + 2πr^2
//Volume of a sphere = (4/3)πr^3
//Surface Area of a sphere = 4πr^2

//Cylinder
if(userObject == 1) {
  if (userFormula == 1) {
    Volume = (radi ** 2) * height;
    Volume *= Math.PI;
    console.log("The volume of the cylinder with the radi of " + radi + " and the height of " + height + " is " + Volume);
  }
  else {
    SurfaceArea = 2 * Math.PI * radi * height;
    SurfaceArea += 2 * Math.PI * (radi ** 2)
    console.log("The surface area of the cylinder with the radi of " + radi + " and the height of " + height + " is " + SurfaceArea);
  }
}
//Sphere
else {
  if (userFormula == 1) {
    Volume = radi ** 3;
    Volume *= (4/3);
    Volume *= Math.PI;
    console.log("The volume of the sphere with the radi of " + radi + " is " + Volume);
  }
  else {
   SurfaceArea = radi ** 2;
   SurfaceArea *= 4;
   SurfaceArea *= Math.PI;
   console.log("The surface area of the sphere with the radi of " + radi + " is " + SurfaceArea);
  }
}
