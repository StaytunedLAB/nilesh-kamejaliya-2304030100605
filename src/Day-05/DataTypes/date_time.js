// === Creating Dates ===
console.log("=== Creating Dates ===");

let now = new Date();                 // current date/time
console.log("Now:", now);

let fromMs = new Date(0);             // from milliseconds since 1970-01-01
console.log("From 0 ms:", fromMs);

let fromString = new Date("2017-01-26");
console.log("From string:", fromString);

let fromParts = new Date(2011, 0, 1); // year, month(0-11), day
console.log("From parts:", fromParts);

// === Reading Components ===
console.log("\n=== Reading Components ===");

let d = new Date();
console.log("Year:", d.getFullYear());
console.log("Month (0–11):", d.getMonth());
console.log("Day of month:", d.getDate());
console.log("Hours:", d.getHours());

// === Changing Components ===
console.log("\n=== Changing Components ===");

let today = new Date();
today.setHours(0, 0, 0, 0);  // set time to midnight
console.log("Today at midnight:", today);

// === Date as Number (difference) ===
console.log("\n=== Date as Number (difference) ===");

let start = Date.now();
// some work
for (let i = 0; i < 100000; i++) {
  let x = i * i;
}
let end = Date.now();

console.log("Loop took:", end - start, "ms");

// === Date.parse ===
console.log("\n=== Date.parse ===");

let ms = Date.parse("2012-01-26T13:51:50.417-07:00");
console.log("Parsed ms:", ms);
console.log("From parsed ms:", new Date(ms));
