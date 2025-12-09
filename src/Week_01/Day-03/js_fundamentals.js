// attached with index.html

// 2.1 Hello world
console.log("Hello, World!");


// 2.2 Code structure
// alert("This is an alert box!");
console.log("This message is logged to the console.");


// 2.3 use of 'use strict'
// To fully enable all features of modern JavaScript, we should start scripts with "use strict".
// Note: ES modules (type="module") are always in strict mode automatically.


// 2.4 Variables
let user = "nick";
const pi = 3.14;
var isActive = true; // old way to declare variables
console.log(user, pi, isActive);


// 2.5 Data types (number, bigint, string, boolean, null, undefined, object ,symbol)
let num = 42;
let bigIntNum = 9007199254741991n;
let str = "Hello, World!";
let bool = true;
let emptyValue = null;
let notDefined;
let obj = { name: "Alice", age: 30 };
let sym = Symbol("unique");

console.log(num, bigIntNum, str, bool, emptyValue, notDefined, obj, sym);


// 2.6 interactions: alert, prompt, confirm

// alert("Hey my name is Nilesh.");
// let userName = prompt("What is your name?", "Guest");
// console.log(`Hello, ${userName}!`);
// let isSure = confirm("Are you sure you want to proceed?");
// console.log(`User confirmation: ${isSure}`);


// 2.7 Type Conversions

let strNum = "123";
let numFromStr = Number(strNum);
console.log(numFromStr, typeof numFromStr); // 123 "number"

let numValue = 456;
String(numValue); 
console.log(typeof String(numValue)); // 456 "string"

let boolValue = true; 
Number(boolValue); 
console.log(typeof Number(boolValue)); // "number"


// 2.8, 2.9, 2.11 operators (arithmetic, assignment, comparison, logical, string, conditional (ternary) )
// Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Assignment Operators
let c = 20;
c += 5;
console.log(c);

// Comparison Operators
console.log(a == b);
console.log(a != b);
console.log(a === b);
console.log(a !== b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// Logical Operators
console.log(a > 5 && b < 10);
console.log(a > 15 || b < 10);
console.log(!(a > b));

// String Operators
let str1 = "Hello, ";
let str2 = "World!";
console.log(str1 + str2);

// Conditional (Ternary) Operator
let age1 = 18;
let canVote = age1 >= 18 ? "Yes" : "No";
console.log(canVote);


// 2.10 condition branching: if

let age2 = 20;
if (age2 < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");
}


// 2.12 nullish operator (??)
let userInput = null;
let defaultValue = "Default Value";
let finalValue = userInput ?? defaultValue;
console.log(finalValue); // Output: "Default Value"

console.log(0 == false);   // true
console.log(0 === false);  // false
console.log("" == false);  // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false     


// 2.13 looping: while, for

// While Loop
let count = 0;
while (count < 5) {
  console.log(`Count is: ${count}`);
  count++;
}

// For Loop
for (let i = 0; i < 5; i++) {
  console.log(`Iteration: ${i}`);
}

// break, continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  if (i % 2 === 0) {
    continue;
  }
  console.log(`Number: ${i}`);
}

// 2.14 switch case
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(`Today is: ${dayName}`);


// 2.15 Functions

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Nilesh"));

function add(a, b) {
  return a + b;
}
console.log(add(5, 10));

function checkAge(age) {
  if (age < 18) {
    return "Minor";
  } else {
    return "Adult";
  }
}
console.log(checkAge(20));


// 2.16 function expressions
const square = function (x) {
  return x * x;
};
console.log(square(4)); // Output: 16


// 2.17 arrow functions
const drive = (age) => {
  if (age >= 18) {
    return "You can drive.";
  } else {
    return "You cannot drive.";
  }
};

console.log(drive(20));
