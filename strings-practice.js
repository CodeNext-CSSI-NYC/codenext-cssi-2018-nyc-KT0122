// Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
//
// Examples:
// makeAbba("Hi", "Bye") → "HiByeByeHi"
// makeAbba("Yo", "Alice") → "YoAliceAliceYo"
// makeAbba("What", "Up") → "WhatUpUpWhat"

function makeAbba(a, b) {
  var finalWord = a;
  return finalWord += b + b + a;
}
//console.log(makeAbba("Hi", "Bye"));


// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).
//
// Examples:
// comboString("Hello", "hi") → "hiHellohi"
// comboString("hi", "Hello") → "hiHellohi"
// comboString("aaa", "b") → "baaab"

function comboString(a, b) {
  var lengthA = a.length;
  var lengthB = b.length;

  if (lengthA > lengthB) {
    return b + a + b;
  } else {
    return a + b + a;
  }
}
//console.log(comboString("aaa", "b"));


// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign". If the string's length is less than 2, then simply return the string itself.
//
// Examples:
// lastTwo("coding") → "codign"
// lastTwo("ab") → "ba"
// lastTwo("a") → "a"

function lastTwo(str) {
  var finalStr = "";
  var tempStr = "";
  var strLength = str.length;
  if (strLength < 2) {
    return str;
  } else {
    finalStr = str.substring(0, strLength - 2);
    tempStr = str.substring(strLength - 1);
    tempStr += str.substring(strLength - 2, strLength - 1);
    return finalStr += tempStr;
  }
}

//console.log(lastTwo("coding"));