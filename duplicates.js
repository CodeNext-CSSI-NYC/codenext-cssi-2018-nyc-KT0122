function breakArr(arr) {
  let tempObj = {};
  for (var i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current in tempObj) {
      tempObj[current]++;
    } else {
      tempObj[current] = 1;
    }
  }
  return tempObj;
}

// 1. Another way to use nested loops is to loop through the same array twice.
// One reason you might do this is to try to figure out if the array has any duplicates.
// The outer loop would track one item in the array, and the inner loop would
// go through all of the items in the array and check if they are the same as
// that first item. If so, the array contains at least one duplicate.
// But make sure you don't compare an item to itself, because that's not a duplicate.

// Get a basic version of this working. You should return true if there is at least one duplicated value.
function hasDuplicate(arr) {
  let tempObj = breakArr(arr);
  var keys = Object.keys(tempObj);
  var values = Object.values(tempObj);

  for (var i = 0; i < values.length; i++) {
    if (values[i] == 2) {
      return true;
    }
  }
  return false;
}

let arr1 = [3, 4, 5, 6, 7, 1, 2, 5, 9];
let arr2 = ["apple", "banana", "pear", "banana"];

// console.log(hasDuplicate(arr1));
// console.log(hasDuplicate(arr2));

// Here are some examples you can use to test
// let arr1 = [3,4,5,6,7,1,2,5,9];
// let arr2 = ["apple", "banana", "pear", "banana"];
// Also make some examples where the answer is false



// 2. Once you have this version working, make a different version that
// tells you which items in the array are duplicated.
// For example, in [3,4,5,6,7,1,2,5,9] the only duplicate is 5
// However, in [3,4,5,4,7,4,2,5,9] the duplicates are 5 and 4 (which appears three times)
function listDuplicates(arr) {
  let tempObj = breakArr(arr);
  let duplicates = [];
  var keys = Object.keys(tempObj);
  var values = Object.values(tempObj);

  for (var i = 0; i < values.length; i++) {
    if (values[i] >= 2) {
      duplicates.push(keys[i]);
    }
  }
  console.log(duplicates);
  return duplicates;
}

// listDuplicates([3, 4, 5, 4, 7, 4, 2, 5, 9]);



// Bonus:
// 3. A related question (though one that has nothing to do with nested loops)
// is to find the mode (the item that appears most often) of an array.
// Write a function that does that.
function findMode(arr) {
  //Break the array and find the amount of times each value in the array appears then sort them into a keys and a values array
  let currentMode = [];
  let currentHighest = 0;
  let tempObj = breakArr(arr);
  var keys = Object.keys(tempObj);
  var values = Object.values(tempObj);

  //Run through the value array
  for (var i = 0; i < values.length; i++) {

    //Compare the current value at index i to the current highest value and reset the current mode array to that value and key
    if (values[i] > currentHighest) {
      currentHighest = values[i];
      currentMode[0] = keys[i];
      if (currentMode.length > 1) {
        for (var j = 0; j < currentMode.length; j++) {
          currentMode.pop();
        }
      }
      //Push a key whose value is equal to that of the current highst to the mode array
    } else if (values[i] == currentHighest) {
      currentMode.push(keys[i])
    }
  }
  console.log(currentMode);
}
// If you test with [3,4,5,4,7,4,2,5,9] it should return 4.
// If it's a case where multiple items appear the most, you can decide to either
// return just one of them, or to return all of them.
// For example [3,4,5,4,7,3,2,5,9] has three values that appear most: 3, 4, and 5.

findMode([3, 4, 5, 4, 7, 3, 2, 5, 9, 7, 7, 3, 4, 5, 4, 7, 4, 2, 5, 9]);