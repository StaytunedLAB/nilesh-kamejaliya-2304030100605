"use strict;";

// for ..in loop
let person = {
  name: "nick",
  age: 21,
  "like programming": true,
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: nick
// age: 21
// like programming: true

// integer properties appear in ascending order
let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

for (let key in codes) {
  console.log(key + ": " + key[codes]);
}

// Output:
// 1: USA
// 41: Switzerland
// 44: Great Britain
// 49: Germany
