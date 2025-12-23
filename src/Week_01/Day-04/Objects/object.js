// object
let user = new Object(); // "object constructor" syntax
let user2 = {}; // "object literal" syntax

let person = {
  name: "Nilesh",
  age: 20,
  "like programming": true,
};

// access keys 
console.log(Object.keys(person));

// access values
console.log(Object.values(person));

//access entries
console.log(Object.entries(person));

// get property values
console.log(person.name);
console.log(person["age"]);

// in operator
console.log("name" in person); // true
console.log("gender" in person); // false
