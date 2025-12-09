// setTimeout

let timeoutId = setTimeout(() => {
  console.log("This message is displayed after 3 seconds");
}, 3000);
console.log("Timeout ID:", timeoutId);

// exaple without arrow function
let timeoutId2 = setTimeout(function () {
  console.log("This message is displayed after 4 seconds");
}, 4000);
console.log("Timeout ID 2:", timeoutId2);

// clearTimeout

let timeoutId3 = setTimeout(() => {
  console.log("This message will not be displayed");
}, 5000);
clearTimeout(timeoutId3);

// setInterval and timeout
console.log("setInterval and timeout");
let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log("Interval count:", count);
  if (count >= 5) {
    clearInterval(intervalId);
  }
}, 1000);

console.log("Interval ID:", intervalId);

// Nested setTimeout
// console.log("Nested setTimeout");
// function nestedTimeout(count) {
//   if (count > 5) return;
//   console.log("Nested Timeout count:", count);
//   setTimeout(() => {
//     nestedTimeout(count + 1);
//   }, 1000);
// }
// nestedTimeout(1);

// Zero delay setTimeout
setTimeout(() => {
  console.log("This message is displayed after the current call stack is cleared");
}, 0);
console.log("This message is displayed before the zero-delay timeout");

