// rest and spread operators

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2, 3, 4, 5)); // 3

// rest perameters
function sumAll(...args) {
  let total = 0;
  for (let arg of args) total += arg;
  return total;
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(sumAll(10, 20, 30)); // 60


// spread operator
let arr = [1, 2, 3];
console.log(...arr); // 1 2 3
let arr2 = [4, 5, 6];
let combined = [...arr, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]