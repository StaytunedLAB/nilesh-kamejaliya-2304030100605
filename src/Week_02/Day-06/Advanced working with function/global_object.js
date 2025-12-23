// global object in javascript

window.name = "Nick"; // setting a global variable
console.log(window.name); // accessing the global variable

var gvar = "Hello World"; // global variable
function checkGlobal() {
  console.log(gvar); // accessing global variable inside a function
}
checkGlobal();

window.currentuser = "Admin"; // setting a global variable using window object
function showUser() {
  console.log(window.currentuser); // accessing global variable using window object
}
showUser();

// Using for polyfills
if (!window.myCustomFunction) {
  window.myCustomFunction = function () {
    console.log("This is a custom function added to the global window object.");
  };
}
window.myCustomFunction(); // calling the custom function

// Function object, NFE

// name property : it returns the name of the function
function sayHello() {
  console.log("Hello!");
}
console.log(sayHello.name); // Output: sayHello

// length property : it returns the number of parameters the function expects

function add(a, b) {
  return a + b;
}
console.log(add.length); // Output: 2

function multiply(a, b, c) {
  return a * b * c;
}
console.log(multiply.length); // Output: 3

// custom property : you can add your own properties to functions

function greet() {
  console.log("Greetings!");
}
greet.customProperty = "This is a custom property";
console.log(greet.customProperty); // Output: This is a custom property

// Named Function Expression (NFE)
var factorial = function fact(n) {
  if (n <= 1) {
    return 1;
  }
  return n * fact(n - 1); // using the function name to call itself recursively
};
console.log(factorial(5)); // Output: 120
