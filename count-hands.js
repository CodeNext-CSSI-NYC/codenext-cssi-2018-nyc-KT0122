let shuffle = require("shuffle-array");
// Copy over your card deck code. You will need that to be working in order
// to complete this exercise.

var deck = [];
for (var i = 1; i <= 13; i++) {
  var str = "";
  if (i == 1) {
    str += "Ace";
  } else if (i >= 2 && i <= 10) {
    str += i;
  } else if (i == 11) {
    str += "Jack";
  } else if (i == 12) {
    str += "Queen";
  } else if (i == 13) {
    str += "King";
  }

  for (var x = 1; x <= 4; x++) {
    if (x == 1) {
      deck.push(str + " Clubs")
    } else if (x == 2) {
      deck.push(str + " Spades");
    } else if (x == 3) {
      deck.push(str + " Hearts");
    } else if (x == 4) {
      deck.push(str + " Diamonds");
    }
  }
}

//console.log(deck);

// 1. Shuffle the deck. This was explained in memory.js.
deck = shuffle(deck);

// 2. Deal a "hand" of seven cards to a player.
// This means there should be a new array called hand that contains 7 cards, and
// those cards should no longer be in the deck.
// Print both of them out to make sure.

var playerHand = [];
for (var i = 0; i < 7; i++) {
  playerHand.push(deck.shift(i));
}
console.log(deck);
console.log(playerHand);

// 3. Count how many of each value are in the hand. For example, if the hand ends
// up with Aceclubs, 2hearts, 2diamonds, 4spades, 5hearts, Jdiamonds, Kclubs ...
// Your code should print out something like:
// 1 Ace, 2 2s, 1 4, 1 5, 1 jack and 1 king.
for (var i = 0; i < playerHand.length; i++) {
  var value = "";
  var check = playerHand[i];
  check = check[0];

  for (var x = 0; x < ) {

  }
}

// 4. If you get that working, try doing this with two hands at the same time.
// 5. If you get that working, create a function called hasTwoPair that takes in
// an array called hand and returns a boolean indicating whether or not that hand
// contains exactly two of any value. My example above would return true
// because it has two 2's. But a hand with 7 different cards would return false.