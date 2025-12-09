// fibonacci sequence
// example: fibonacci(5) => 0, 1, 1, 2, 3, 5
// example: fibonacci(8) => 0, 1, 1, 2, 3, 5, 8, 13, 21

function fibonacci(n) {
  // base case
  if (n <= 0) return 0;
  if (n === 1) return 1;
  // recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)); // 5
console.log(fibonacci(8)); // 21
