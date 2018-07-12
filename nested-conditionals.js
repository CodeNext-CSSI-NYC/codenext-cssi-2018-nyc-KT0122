var readline = require("readline-sync");

// 1. Ask the user to type in fruit or veggie.
// If they say fruit, ask them to choose a or b.
// If they say a, print out apple. If they say b, print out banana.
// If they said veggie at the beginning, ask them to choose m or p.
// If they say m, print out mushroom. If they say p, print out pepper.
var userFoV = readline.question("Type in fruit or veggie: ");
var userFoV = userFoV.toLowerCase();

if (userFoV == "fruit") {
  var userSpecific = readline.question("Choose a or b: ");
  if (userSpecific.toLowerCase() == 'a') {
      console.log("Apple");
  } else {
    console.log("Banana");
  }
} else {
  var userSpecific = readline.question("Choose m or p: ");
  if (userSpecific.toLowerCase() == 'm') {
    console.log("Mushroom");
  } else {
    console.log("Pepper");
  }
}

// 2. Ask the user to choose square or rectangle.
// Also ask them to choose area or perimeter.
// Tell them the formula depending on what they chose.
// For example, if they said square and perimeter, you could print: 4 * s

var userShape = readline.question("Square or Rectangle: ");
var userFormula = readline.question("Area or Perimeter: ")
userShape = userShape.toLowerCase();
userFormula = userFormula.toLowerCase();

if (userShape == "square") {
  if (userFormula == "area") {
    console.log("s^2");
  } else {
    console.log("s * 4");
  }
} else {
  if (userFormula == "perimeter") {
    console.log("2l + 2h");
  } else {
    console.log("l * h");
  }
}

// BONUS CHALLENGE
// 3. Pretend you are running a fast food shop.
// Start out with the line let totalCost = 0;
// Ask the user if they want a value meal, or if they will order individual items.
// If they want a value meal, ask if they want the burger ($7) or the chicken ($6).
// Add the amount to totalCost, then tell them how much they owe.
// If they want individual items, ask them (one item at a time)
// if they want burger ($4), fries ($2), drink ($1), dessert ($2).
// Each time they say yes, add the right amount to the totalCost.
// At the end, tell them how much they owe.

let totalCost = 0;

var userFastFood = readline.question("Hello, do you want a value meal? ")
userFastFood = userFastFood.toLowerCase();

if (userFastFood == "yes") {
  var userValueMeal  = readline.question("Burger($7) or Chicken($6)? ");
  userValueMeal = userValueMeal.toLowerCase();

  if (userValueMeal == "burger") {
      totalCost += 7;
  } else {
    totalCost += 6;
  }
} else {
  var burger = readline.question("Burger? ");
  var fries = readline.question("Fries? ");
  var drink = readline.question("drink? ");
  var dessert = readline.question("dessert? ");

  if (burger.toLowerCase() == "yes") {
    totalCost += 4;
  }
  if (fries.toLowerCase() == "yes") {
    totalCost += 2;
  }
  if (drink.toLowerCase() == "yes") {
    totalCost += 1;
  }
  if (dessert.toLowerCase() == "yes") {
    totalCost += 2;
  }
}

console.log("You owe " + totalCost + " have a nice day");
