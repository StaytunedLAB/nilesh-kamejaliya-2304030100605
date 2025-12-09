// recursion and stack

// two ways to implement factorial function

// 1. using loop
function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
console.log(power(2, 3)); // 8

// 2. using recursion
function powerRecursive(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * powerRecursive(base, exponent - 1);
  }
}
console.log(powerRecursive(2, 3)); // 8

// recursion stack example
function recursiveFunction(count) {
  if (count <= 0) {
    return;
  }
  console.log("Count:", count);
  recursiveFunction(count - 1);
  console.log("Returning from count:", count);
}
recursiveFunction(3);
// Output:
// Count: 3
// Count: 2
// Count: 1
// Returning from count: 1
// Returning from count: 2
// Returning from count: 3

// Note: Each recursive call adds a new layer to the call stack, and once the base case is reached, the stack unwinds as each function returns.
