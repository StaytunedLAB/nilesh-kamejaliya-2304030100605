// type: symbol

let id1 = Symbol("id1 description");
console.log(id1.toString()); // Symbol(id1 description)
console.log(id1.description); // id1 description

let id2 = Symbol("id1 description");
console.log(id1 === id2); // false

// Using Symbol as object property keys
let user = {
  name: "Alice",
};

// Adding a symbol property
let id = Symbol("userID");
user[id] = 1;
console.log(user[id]); // 1

// symbols are skipped by for...in
let person = {
  [id]: 123,
  name: "Bob",
  age: 30,
};

for (let key in person) {
  console.log(key + ": " + person[key]); // name, age
}

// global symbol registry
let sym1 = Symbol.for("globalID");
let sym2 = Symbol.for("globalID");
console.log(sym1 === sym2); // true

console.log(Symbol.keyFor(sym1)); // globalID
console.log(Symbol.keyFor(id)); // undefined
// (id is not in global registry)

