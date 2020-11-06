var x = 1 + 1 * 2; // expected answer is 3
var y = (1 + 1) * 2; // expected answer is 4
var z = 1 + (1 * 2); // expected answer is 3
var a = 1 + 1 * 2 / 2; // expected answer is 2
var b = (1 + 1 * 2) / 2; //expected answer is 1.5

// line 1 to 5 execute calculations according to BODMAS rule

console.log(
    "x =", x,
    "y = ", y,
    "z = ", z,
    "a = ", a,
    "b = ", b

);