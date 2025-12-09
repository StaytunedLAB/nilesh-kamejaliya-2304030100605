// number data type

let num1 = 1000000000;
let num2 = 1_000_000_000; // using underscores for better readability
let num3 = 1e9; // scientific notation

// use of e-notation

let num4 = 0.000001;
let num5 = 1e-6; // equivalent to 0.000001
console.log(num4 === num5); // true

let num6 = 12.34;
let num7 = 1.234e1; // equivalent to 12.34
console.log(num6 === num7); // true

// Hex, binary and octal numbers
let hexNum = 0xff; // hexadecimal for 255
let binNum = 0b11111111; // binary for 255
let octNum = 0o377; // octal for 255
console.log(hexNum === binNum && binNum === octNum);

// tostring() base conversion
let number = 255;
console.log(number.toString(16)); // "ff" in hexadecimal
console.log(number.toString(2));

// rounding

// Math.floor
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(4.3)); // 4
console.log(Math.floor(-4.7)); // -5
console.log(Math.floor(-4.3)); // -5

// Math.ceil
console.log(Math.ceil(4.7)); // 5
console.log(Math.ceil(-4.3)); // -4

// Math.round
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(-4.3)); // -4
console.log(Math.round(-4.7)); // -5

// random function
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10); // random number between 0 and 10

// min & max function
console.log(Math.min(3, 1, 4, 2)); // 1
console.log(Math.max(3, 1, 4, 2)); // 4

// math.pow & math.sqrt
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4

// Create a script that prompts the visitor to enter two numbers and then shows their sum.
// let a = +prompt("The first number?", "");
// let b = +prompt("The second number?", "");

// alert( a + b );


// exercise 02
// function readNumber() {
//     let num;
//     do {
//         num = prompt("Enter a number:", "");
//         if (num === null || num === "") return null;
//     } while (isNaN(num));
//     return +num;
// }
// console.log(readNumber());


// min max random exercise
function random(min, max) {
    return min + Math.random() * (max - min);
}
console.log(random(0,1));