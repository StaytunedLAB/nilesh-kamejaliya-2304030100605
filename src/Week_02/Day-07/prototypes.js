// prototypes
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const alice = new Person("Alice", 30);
alice.greet(); // Hello, my name is Alice and I am 30 years old.
console.log(alice instanceof Person); // true

// inheritance
function Employee(name, age, position) {
  Person.call(this, name, age); // call the parent constructor
  this.position = position;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.describe = function () {
  console.log(`I am ${this.name}, a ${this.position}.`);
};

const bob = new Employee("Bob", 25, "Developer");
bob.greet(); // Hello, my name is Bob and I am 25 years old.
bob.describe(); // I am Bob, a Developer.
console.log(bob instanceof Employee); // true
console.log(bob instanceof Person); // true