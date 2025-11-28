// for ..in loop
let person = {
  name: "nick",
  age: 21,
  "like programming": true,
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// integer properties appear in ascending order
let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

for (let code in codes) {
  console.log(key + ": " + codes[code]);
}

