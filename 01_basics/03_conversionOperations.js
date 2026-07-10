//let score = 21
let marks = "33"
let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score) // will convert the score into a number, similar for other conversions as well
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN (NaN means Not a Number) JS will allow the coversion of such str and number but will return a NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // will return 12
// console.log(1 + "2"); //same
// console.log("1" + 2 + 2);  //will return 122
// console.log(1 + 2 + "2");  // will return 32!!!

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

//postfix increament in js
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n


//prefix increament in js
let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n


// the concept of template literal in JS (similar to f'strings in python):
// JavaScript (Template Literal) eg:
console.log(`x:${x}, y:${y}`); 

// The 3 Rules of Template Literals:
// The Backticks (`): You cannot use normal single quotes (') or double quotes ("). You must wrap the entire string in backticks (the key right below the Esc key on your keyboard).
// The $ Sign: This tells JavaScript, "Hey, look alive! A variable or expression is coming up right after this."
// The Curly Braces {}: This is the actual evaluation basket. Anything you put inside these curly braces will be evaluated as JavaScript code and converted into text.


// link to study ECMA Script:
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion