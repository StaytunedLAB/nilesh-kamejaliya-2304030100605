"use strict";

// Example object
let user = {
  name: "Nick",
  age: 22,
};

// teach user to say hello
user.sayHi = function () {
  console.log("User says hello!");
};
user.sayHi();

// method Shorthand
user = {
  sayYes: function () {
    console.log("User says Yes!");
  },
};
user.sayYes();

// .this keyword

let person1 = {
  name: "Nilesh",
  age: 22,
  intro: function () {
    console.log(`Hey, my name is ${name}`);
    console.log(`Hey, my name is ${this.name}`);
  },
};

let newPerson = person1;
newPerson = null;

console.log(person1.intro());

// Constructor

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Nilesh");

console.log(user.name); // Nilesh
console.log(user.isAdmin); // false

