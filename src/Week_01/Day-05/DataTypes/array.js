// array data type

let exArray = new Array();
let exArray2 = [];

let exArray3 = [1, 2, 3, 4, 5];
let fruitArray = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruitArray.length); // 4

console.log(fruitArray);
console.log(fruitArray[0]); // Apple
console.log(fruitArray[1]); // Banana

console.log(fruitArray[2]); // Mango
fruitArray[2] = "Pineapple"; // updating value at index 2
console.log(fruitArray[2]); // Pineapple

// methods of array
let cars = ["BMW", "Audi", "Mercedes", "Toyota", "Honda"];

// pop
console.log(cars.pop()); // Honda
console.log(cars); // [ 'BMW', 'Audi', 'Mercedes', 'Toyota' ]

// push
console.log(cars.push("Ferrari")); // 5
console.log(cars); // [ 'BMW', 'Audi', 'Mercedes', 'Toyota', 'Ferrari' ]

// shift
console.log(cars.shift()); // BMW
console.log(cars); // [ 'Audi', 'Mercedes', 'Toyota', 'Ferrari' ]

// unshift
console.log(cars.unshift("Lamborghini")); // 5
console.log(cars); // [ 'Lamborghini', 'Audi', 'Mercedes', 'Toyota', 'Ferrari' ]

// loops in array
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

for (let car of cars) {
  console.log(car);
}

// multi dimensional array
let multiArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(multiArray[0][0], multiArray[0][1], multiArray[0][2]); // 1 2 3
console.log(multiArray[1][0], multiArray[1][1], multiArray[1][2]); // 4 5 6
console.log(multiArray[2][0], multiArray[2][1], multiArray[2][2]); // 7 8 9

// array methods: slice, splice, concat, indexOf, join, reverse, sort

// slice
let numbers1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let slicedNumbers = numbers1.slice(2, 5); // extracts 30, 40, 50
console.log(slicedNumbers); // [30, 40, 50]
console.log(numbers1); // [10, 20, 30, 40, 50, 60, 70, 80, 90]

// splice
let numbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let splicedNumbers = numbers2.splice(2, 5); // removes 30, 40, 50, 60, 70
console.log(splicedNumbers);
console.log(numbers2); // [10, 20, 80, 90]

// indexOf and lastIndexOf
let fruits = ["Apple", "Banana", "Mango", "Orange", "Banana"];
console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.lastIndexOf("Banana")); // 4
console.log(fruits.indexOf("Grapes")); // -1

// find
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "Sara" },
  { id: 5, name: "David" },
];

let user = users.find((item) => item.id == 1);

alert(user.name); // John

// filter
let someUsers = users.filter((item) => item.id < 3);
console.log(someUsers); // [ { id: 1, name: 'John' }, { id: 2, name: 'Pete' } ]

// map
let persons = users.map((item) => item.name);
console.log(persons); // [ 'John', 'Pete', 'Mary', 'Sara', 'David' ]

// sort
let newNumbers = [40, 100, 1, 5, 25, 10];
newNumbers.sort();
console.log(newNumbers); // [ 1, 10, 100, 25, 40, 5 ]

// reverse
newNumbers.reverse();
console.log(newNumbers); // [ 5, 40, 25, 100, 10, 1 ]

// split and join
let message = "Hello World, Welcome to JavaScript Arrays";
let words = message.split(" ");
console.log(words); // [ 'Hello', 'World,', 'Welcome', 'to', 'JavaScript', 'Arrays' ]

let joinedMessage = words.join(" ");
console.log(joinedMessage); // Hello World, Welcome to JavaScript Arrays

// array.isArray
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray("Hello")); // false

// method thisArg
let numbers3 = [1, 2, 3, 4, 5];
let multiplier = {
  factor: 2,
};
let multipliedNumbers = numbers3.map(function (item) {
  return item * this.factor;
}, multiplier);
console.log(multipliedNumbers); // [2, 4, 6, 8, 10]


