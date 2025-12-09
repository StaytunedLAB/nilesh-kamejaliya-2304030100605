// newFunction syntax

let func = new Function("a", "b", "return a + b;");
console.log(func(2, 3)); // Output: 5

let sayHello = new Function('console.log("Hello from new Function!");');
sayHello(); // Output: Hello from new Function!

// closure with new Function

let x = 10;
let closureFunc = new Function("return x + 5;");
// console.log(closureFunc()); 
// Output: NaN (because new Function does not create a closure)