// 1. Write a function that takes an array of numbers and returns an array that contains
// double each number.
function double(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
}
// Here is one test. Uncomment it when ready and try adding more.
// testEqual(double([3, 2, 5]), [6, 4, 10]);
// testEqual(double([11, 7, 6]), [22, 14, 12]);
// testEqual(double([8, 9, 7]), [16, 18, 14]);


// 2. Write a function that takes an array and returns its second-to-last element.
function secondToLast(arr) {
  return arr[arr.length - 2]
}
// Here is one test. Uncomment it when ready and try adding more.
// console.log(secondToLast([3, 1, 4, 9, 2, 5]) == 2);



// 3. Write a function that takes an array of numbers and returns an array that
// contains only the smallest and largest values from the array. Hint: sort().
function smallestLargest(arr) {
  var smallest = arr[0];
  var largest = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]
    } else if (arr[i] < smallest) {
      smallest = arr[i]
    }
  }
  return [smallest, largest];
}
// Here is one test. Uncomment it when ready and try adding more.
// testEqual(smallestLargest([3, 7, 2, 5]), [2, 7]);
// testEqual(smallestLargest([-5, 103, 6, 53]), [-5, 103]);
// testEqual(smallestLargest([7, 32, -33, 33]), [-33, 33]);


// 4. Write a function that takes an array and returns a similar array,
// but with the last item moved up to the beginning.
function moveLast(arr) {
  var lastVal = arr.pop();
  arr.unshift(lastVal);
  return arr;
}
// Here is one test. Uncomment it when ready and try adding more.
// testEqual(moveLast([3, 2, 5, 7]), [7, 3, 2, 5]);
// testEqual(moveLast([9, 2, 4, 7]), [7, 9, 2, 4]);
// testEqual(moveLast([5, 8, 0, 1]), [1, 5, 8, 0]);

// 5. Write a function that takes an array and returns an array that contains
// the first letter of each element of the passed in array.
// For example, if ["apple", "banana", "pear"] is passed in, it should
// return ["a", "b", "p"]
function firstLetter(arr) {
  var firstLetterArr = [];
  for (var i = 0; i < arr.length; i++) {
    firstLetterArr.push(arr[i].charAt(0));
  }
  return firstLetterArr;
}
// Here is one test. Uncomment it when ready and try adding more.
// testEqual(firstLetter(["apple", "banana", "pear"]), ["a", "b", "p"]);
// testEqual(firstLetter(["google", "amazon", "twitter"]), ["g", "a", "t"]);
// testEqual(firstLetter(["xbox", "pc", "switch"]), ["x", "p", "s"]);


/*
Bonus 1: Write a function that takes a list of strings an prints them, one per line,
in a rectangular frame. For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/

function framed(arr) {
  var longestWord = arr[0];
  var starline = "";

  for (var i = 1; i < arr.length; i++) {
    if (longestWord.length < arr[i]) {
      longestWord = arr[i];
    }
  }

  for (var i = 0; i < longestWord.length + 4; i++) {
    starline += "*";
  }

  console.log(starline);

  for (var i = 0; i < arr.length; i++) {
    var middleStarline = "* ";
    middleStarline += arr[i];
    for (var x = middleStarline.length; x < starline.length - 1; x++) {
      middleStarline += " ";
    }
    middleStarline += "*";
    console.log(middleStarline);
  }
  console.log(starline);
}

framed(["Hello", "World", "in", "a", "frame"]);

// Bonus 2: Write function that translates a text to Pig Latin.
// We'll say that English is translated to Pig Latin by taking the first letter
// of every word, moving it to the end of the word and adding ‘ay’.
// So “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
// Hint: create an array by using the split() method of Strings. Look it up.\
// Then go through the array and convert each word to pig latin.
function pigLatin(text) {
  var arr = text.split(" ");
  var finalSentence = "";
  for (int i = 0; i < arr.length; i++)[
    var currentWord = arr[i];

  ]
}






// ==================================================================== //
// This is used in some of the tests above. Don't edit it.
function testEqual(arr1, arr2) {
  if (arr1.length != arr2.length) {
    console.log(false);
    return;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      console.log(false);
      return;
    }
  }
  console.log(true);
}