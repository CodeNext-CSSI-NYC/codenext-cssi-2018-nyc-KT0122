// Author: Khalil Tavarez

var y = 2003;
var a = y % 19;

var b = Math.floor(y / 100);
var d = Math.floor(b / 4);
var e = Math.floor(b % 4);
var f = Math.floor((b + 8) / 25);
var g = Math.floor(((b - f) + 1) / 3);
var h = Math.floor((19 * a + b - d - g + 15) % 30);

var c = Math.floor(y % 100);
var i = Math.floor(c / 4);
var k = Math.floor(c % 4);
var r = Math.floor((32 + 2 * e + 2 * i - h - k) % 7);
var m = Math.floor((a + 11 * h + 22 * r ) / 451);
var n = Math.floor((h + r - 7 * m + 114) / 31);
var p = Math.floor((h + r - 7 * m + 114) % 31);

console.log("y = " + y);
console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);
console.log("d = " + d);
console.log("e = " + d);
console.log("f = " + f);
console.log("g = " + g);
console.log("i = " + i);
console.log("k = " + k);
console.log("r = " + r);
console.log("m = " + m);
console.log("n = " + n);
console.log("p = " + p);
console.log("In " + y + " Easter fell on " + n + "/" + (p + 1))
