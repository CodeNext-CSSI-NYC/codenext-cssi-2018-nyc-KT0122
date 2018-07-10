// Author: Khalil Tavarez
var readline = require("readline-sync");


console.log("I aM THe ChAnGE MaChiNE");
var userChange = parseInt(readline.question("TeLL mE yoUR ChaNge In a PoSItiVe InTerGeR: "));

var quarterCount = 0;
var quarterLeftOver = 0;
var dimeCount = 0;
var dimeLeftOver = 0;
var nickleCount = 0;
var nickleLeftOver = 0;
var pennyCount = 0;

//Quarters
quarterCount = Math.floor(userChange / 25);
quarterLeftOver = userChange % 25;

if(quarterLeftOver == 0) {

}

//Dimes
else {
  dimeCount = Math.floor(quarterLeftOver / 10);
  dimeLeftOver = quarterLeftOver % 10;

  if(dimeLeftOver == 0){

  }

  //Nickles
  else {
    nickleCount = Math.floor(dimeLeftOver / 5);
    nickleLeftOver = dimeLeftOver % 5;

    if(nickleLeftOver == 0){

    }
    //Pennies
    else {
      pennyCount = Math.floor(nickleLeftOver / 1);
    }
  }
}

console.log(userChange + " cents makes:");
console.log("Quarters:" + quarterCount);
console.log("Dimes:" + dimeCount);
console.log("Nickles:" + nickleCount);
console.log("Pennies:" + pennyCount);
console.log("ThAnK yOU fOr LeTTinM cOunT yOuR chAngE");
