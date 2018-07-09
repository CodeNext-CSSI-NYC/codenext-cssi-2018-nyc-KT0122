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

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(i);
console.log(k);
console.log(r);
console.log(m);
console.log(n);
console.log(p + 1);
