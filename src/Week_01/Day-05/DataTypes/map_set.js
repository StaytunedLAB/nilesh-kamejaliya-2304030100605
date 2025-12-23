// map

let myMap = new Map();
myMap.set("1", "Nilesh"); //  string key
myMap.set(1, "nick"); //  number key
myMap.set(true, "isAdult"); // boolean key

console.log(myMap);

// object as key
let person = { name: "Nilesh" };
let details = new Map();
details.set(person, 123);
console.log(details); // Map(1) { { name: 'Nilesh' } => 123 }

// Iteration over Map

let example = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
]);

// map.keys()

for (let key of example.keys()) {
  console.log("key:", key);
}

// map.values()
for (let value of example.values()) {
  console.log("value:", value);
}

// map.entries()
for (let entry of example.entries()) {
  console.log("entry:", entry);
}

// fromEntries() used to create map from array of arrays or object
let arr = [
  ["x", 10],
  ["y", 20],
  ["z", 30],
];

let newMap = new Map(arr);
console.log(newMap);
let fromEntriesMap = new Map(Object.entries({ p: 100, q: 200, r: 300 }));
console.log(fromEntriesMap);

// set

let mySet = new Set();

let set1 = { name1: "person1" };
let set2 = { name2: "person2" };
let set3 = { name3: "person3" };

mySet.add(set1);
mySet.add(set2);
mySet.add(set3);

console.log(mySet.size);

for (let item of mySet) {
  console.log(item);
}

// iteration over set

// set.keys()
for (let key of mySet.keys()) {
  console.log("set key:", key);
}

// set.values()
for (let value of mySet.values()) {
  console.log("set value:", value);
}

// set.entries()
for (let entry of mySet.entries()) {
  console.log("set entry:", entry);
}
