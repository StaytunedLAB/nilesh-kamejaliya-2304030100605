// class inheritance

// extend keyword 
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks!`);
  }
}

const dog = new Dog("Buddy");
dog.bark();

// Output:
// Buddy barks!


// super keyword
class Person {
  constructor(name) {
    this.name = name;
  }
    greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person("Nilesh");
person.greet();

// Output:
// Hello, my name is Nilesh

class Employee extends Person {
  constructor(name, position) {
    super(name); // Call the parent class constructor
    this.position = position;
  }
  describe() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.position}.`);
  }
}

const employee = new Employee("Nilesh", "Software Engineer");
employee.greet();
employee.describe();

// Output:
// Hello, my name is Nilesh
// Hello, my name is Nilesh and I am a Software Engineer.

// method overriding
class Vehicle {
  start() {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {
  start() {
    super.start(); // Call the parent class method
    console.log("Car started");
  }
}

const car = new Car();
car.start();

// Output:
// Vehicle started
// Car started


// overriding constructor
class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color); // Call the parent class constructor
    this.radius = radius;
  }
}
const circle = new Circle("red", 5);
console.log(`Circle color: ${circle.color}, radius: ${circle.radius}`);

// Output:
// Circle color: red, radius: 5

