// Author: Khalil Tavarez
let readline = require("readline-sync");

/******************************************************************************
                                  getNewFirstName()

  This function returns the user's new first name. To do so, concatenate the
  first 3 letters of their real first name and the first 2 letters of their
  real last name.
*******************************************************************************/
function getNewFirstName(firstName, lastName) {
  var newFName = firstName.substring(0, 3);
  return newFName += lastName.substring(0, 2);
}




/******************************************************************************
                                  getNewLastName()

  This function returns the user's new last name. To do so, concatenate the
  first 2 letters of their mom's maiden name and the first 3 letters of the
  city where they were born.
*******************************************************************************/
function getNewLastName(momMaidenName, cityBorn) {
  var newLName = momMaidenName.substring(0, 2);
  newLName += cityBorn.substring(0, 3);

  return newLName;
}




/******************************************************************************
                                  getTitle()

  This function returns the user's title. To do so, concatenate the last three
  letters of their real last name, reversed, and the model of their dream car.
*******************************************************************************/
function getTitle(lastName, dreamCar) {
  var title = "";
  var temp = lastName.substring(lastName.length - 3);

  for (var i = temp.length; i != -1; i--)
    title += temp.charAt(i);

  return title + dreamCar;
}




/******************************************************************************
                                  getHonorific()

  This function returns the user's full honorific. To do so, concatenate their
  title, " of ", and the name of the street they live on.
*******************************************************************************/
function getHonorific(title, street) {
  var honorific = title.concat(" of ", street);
  return honorific;
}




/******************************************************************************
                                     run()

  This function runs the program. At the very least it should ask the user
  to answer a series of questions and store the answers in different variables.
  It should then call the functions above, passing in the right parameters,
  to produce the user's fantasy name. Create a variable called fantasyName
  to hold the results, and display it for the user to see.
*******************************************************************************/
function run() {
  var firstName = readline.question("What is your first name? ");
  var lastName = readline.question("What is your last name? ");
  var momMaidenName = readline.question("What is your mom's maiden name? ");
  var cityBorn = readline.question("What city were you born in? ");
  var dreamCar = readline.question("What is your dream car? ");
  var street = readline.question("What street do you live on? ");

  var title = getTitle(lastName, dreamCar);
  var fantasyName = getNewFirstName(firstName, lastName);
  fantasyName += " " + getNewLastName(momMaidenName, cityBorn);
  fantasyName += ", The " + getHonorific(title, street);

  console.log("Your fantasy name is  " + fantasyName);
}




// Run the program!
run();