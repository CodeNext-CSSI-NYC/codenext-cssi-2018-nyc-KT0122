// You can use nested loops and 2-d arrays to draw patterns
// Here is an example:
// let numRowsCols = 15;
// for (let i = 0; i < numRowsCols; i++) {
//   let row = "";
//   for (let j = 0; j < numRowsCols; j++) {
//     if (i == j) {
//       row += "X";
//     } else {
//       row += "-";
//     }
//   }
//   console.log(row);
// }
// Run this, and make sure you understand exactly why it looks as it does



// 1. Try to make this one. Hint: you will need to compare i and j in order to
// decide when to add * onto the strings that represent each row.

// *
// **
// ***
// ****
// *****
// ******
function starLine(lineSize) {
  for (var i = 0; i < lineSize; i++) {
    let currentLine = "";
    for (var j = 0; j <= i; j++) {
      currentLine += "*";
    }
    console.log(currentLine);
  }
}

// starLine(6);


// 2. Try to figure out how to draw a "border" pattern:

// XXXXXXXX
// X------X
// X------X
// X------X
// X------X
// X------X
// X------X
// XXXXXXXX

function border() {
  let TaBLine = "";
  for (var i = 0; i < 8; i++) {
    TaBLine += "X";
  }
  console.log(TaBLine);
  for (var i = 0; i < 6; i++) {
    let currentLine = "";
    for (var j = 0; j < 8; j++) {
      if (j == 0 || j == 7) {
        currentLine += "X";
      } else {
        currentLine += "-";
      }
    }
    console.log(currentLine);
  }
  console.log(TaBLine);
}
// border();

// Bonus -- All the ones that follow are surprisingly tricky.

// 3. Hint -- You will need to add spaces to the string up to a certain point,
// and then add stars.
// Hint2 -- You could consider adding the stars first and then
// adding the spaces to the beginning of the string.

//     *
//    **
//   ***
//  ****
// *****

function reverseStarLine(lineSize) {
  for (var i = lineSize; i > 0; i--) {
    let currentLine = "";
    for (var j = 0; j < lineSize; j++) {
      if (j < i - 1) {
        currentLine += " ";
      } else {
        currentLine += "*"
      }
    }
    console.log(currentLine);
  }
}
// reverseStarLine(5);

// 4. Here's one that builds on the same idea in the previous pattern:
// *   *
//  * *
//   *
//  * *
// *   *

function starX(xSize) {
  for (var i = 0; i < xSize; i++) {
    let currentLine = "";
    for (var j = 0; j < xSize; j++) {
      if (j == i || j == Math.abs(i - (xSize - 1))) {
        currentLine += "*";
      } else {
        currentLine += " ";
      }
    }
    console.log(currentLine);
  }
}
// starX(5);

// (For the ones that follow, feel free to use something other than "X" and "-").
// The characters that you draw don't matter, just the pattern they are in.

// HINT: The only way to figure these out is to write down the coordinates of
// the spots that have the X's in them, compare them to the spots that have "-"
// in them, and try to find a pattern you can express in code.



// 5. Try to figure out how to draw a "chessboard" pattern:

// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X

function chessboard(boardSize) {
  for (var i = 0; i < boardSize; i++) {
    let currentLine = "";
    for (var j = 0; j < 8; j++) {
      let IRow = i == 0 || i % 2 == 0;
      let JColumn = j % 2 == 0 || j == 0;
      if (IRow) {
        if (JColumn) {
          currentLine += "X";
        } else {
          currentLine += "-";
        }
      } else {
        if (JColumn) {
          currentLine += "-";
        } else {
          currentLine += "X";
        }
      }
    }
    console.log(currentLine);
  }
}
// chessboard(8);

// These last two are very hard.

// 6. Try to figure out how to draw a "grid" pattern:
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
function grid(gridSize) {
  for (var i = 0; i < gridSize; i++) {
    let currentLine = "";
    for (var j = 0; j <= 10; j++) {
      let IRow = i == 0 || i % 2 == 0;
      let JColumn = j % 2 == 0 || j == 0;
      if (IRow) {
        currentLine += "X";
      } else {
        if (JColumn) {
          currentLine += "X";
        } else {
          currentLine += "-";
        }
      }
    }
    console.log(currentLine);
  }

}
// grid(9);

// 7. A pyramid!
// Hint for this one... try printing stars straight down the middle first.
// How do you know what value will be the "middle"? Once you figure out what the middle is,
// you can add stars to the left and right of it as you go down the rows.
//
//     *
//    ***
//   *****
//  *******
// *********

function pyramid(pyramidHeight) {
  let pyramidLength = (pyramidHeight * 2) - 1;
  middlePoint = Math.ceil(pyramidLength / 2);
  for (var i = 0; i < pyramidHeight; i++) {
    let currentLine = "";
    for (var j = 0; j <= pyramidLength; j++) {
      if ((j == middlePoint) || ((j >= middlePoint - i) && (j <= middlePoint + i))) {
        currentLine += "*";
      } else {
        currentLine += " ";
      }
    }
    console.log(currentLine);
  }
}

pyramid(5);