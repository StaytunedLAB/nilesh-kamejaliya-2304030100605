// json in javascript

let student = {
  name: "Nilesh",
  age: 21,
  isAdmin: false,
  courses: ["html", "css", "js"],
  toString: function () {
    return this.name + ", " + this.age + " years old";
  },
};

console.log(student);
console.log(student.toString()); // Nilesh, 21 years old

// json stringify
let jsonString = JSON.stringify(student);
console.log(jsonString); // {"name":"Nilesh","age":21,"isAdmin":false,"courses":["html","css","js"]}

// json parse
let parsedStudent = JSON.parse(jsonString);
console.log(parsedStudent); // { name: 'Nilesh', age: 21, isAdmin: false, courses: [ 'html', 'css', 'js' ] }
