"use strict";

// 1. Hello world
console.log("Hello, world!");
alert("Hey..!")

// 2. Variables
let user = "Nick";
const pi = 3.14;

// 3. Data types
let age = 20;            // number
let name = "Nick";      // string
let isStudent = true;    // boolean
let emptyValue = null;   // null
let undefinedValue;      // undefined

console.log(typeof name); // string

// 4. Operators
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1

// 5. Comparisons
console.log(5 > 2);       // true
console.log("2" == 2);    // true (loose)
console.log("2" === 2);   // false (strict)

// 6. Conditionals
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// 7. Logical operators
let hasID = true;
let hasTicket = false;
console.log(hasID && hasTicket); // false

// 8. Nullish coalescing
let username = "";
let displayName = username ?? "Guest";
console.log(displayName);
