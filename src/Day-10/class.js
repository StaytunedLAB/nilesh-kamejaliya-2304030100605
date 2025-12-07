// class in JavaScript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person1 = new Person("Nilesh", 21);
console.log(person1);
const person2 = new Person("Nick", 25);
console.log(person2);

// Output:
// Person { name: 'Nilesh', age: 21 }
// Person { name: 'Nick', age: 25 }

// class expression
const Car = class {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
};
const car1 = new Car("Toyota", "Camry");
console.log(car1);
const car2 = new Car("Honda", "Civic");
console.log(car2);

// Output:
// Car { brand: 'Toyota', model: 'Camry' }
// Car { brand: 'Honda', model: 'Civic' }

// class with method
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}
const rectangle1 = new Rectangle(5, 10);
console.log(`Area of rectangle1: ${rectangle1.area()}`);

// Output:
// Area of rectangle1: 50

// getter and setter
class user {
  constructor(username) {
    this._username = username;
  }
  get username() {
    return this._username;
  }
  set username(value) {
    this._username = value;
  }
}
const user1 = new user("Nilesh");
console.log(`Username: ${user1.username}`);
// output: Username: Nilesh

// computed property names
class Greeter {
  ["say" + "Hello"]() {
    console.log("Hello!");
  }
}
const greeter = new Greeter();
greeter.sayHello();
// Output: Hello!

// task : Create a Clock class that displays the current time every second in the format "hh:mm:ss".
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

// let clock = new Clock({ template: "h:m:s" });
// clock.start();
