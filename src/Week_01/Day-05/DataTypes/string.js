// String data type

let name1 = "Nilesh"; // Double quotes
// let name2 = 'Kamejaliya'; // Single quotes
let name3 = `Staytuned`; // Backticks (template literals)

let guest = `Guest:
* nick
* john
* sam`; // Multiline string with template literals

console.log(guest);

// special characters (/n, /t, etc.)
let message1 = "Hello,\nWelcome to Staytuned!";
let message2 = "Hello,\n \t Welcome to Staytuned!";
console.log(message1);
console.log(message2);

// accessing characters
let str = "Hello";
console.log(str[0]); // H
console.log(str.charAt(1)); // e
console.log(str.length); // 5

// string are immutable
// let greet = "Hello";
// greet[0] = "h"; // This will not change the string
// console.log(greet); // Hello

let str1 = "Hi";
console.log(str1);
str = "h" + str1[1]; // This will create a new string
console.log(str); // hi

// String methods
let sample = "  Staytuned Learning Platform  ";
console.log(sample.toUpperCase()); // STAYTUNED LEARNING PLATFORM
console.log(sample.toLowerCase()); // staytuned learning platform
console.log(sample.trim()); // "Staytuned Learning Platform"
console.log(sample.indexOf("Learning")); // 11
console.log(sample.slice(11, 19)); // Learning));
console.log(sample.replace("Platform", "Hub")); // "  Staytuned Learning Hub  "
console.log(sample.includes("Staytuned")); // true
console.log(sample.startsWith("  Stay")); // true
console.log(sample.endsWith("Platform  ")); // true
console.log(sample.repeat(2)); // "  Staytuned Learning Platform    Staytuned Learning Platform  "

// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("nilesh")); // Nilesh

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}
console.log(checkSpam("buy ViAgRA now")); // true
console.log(checkSpam("free xxxxx")); // true
console.log(checkSpam("innocent rabbit")); // false

// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.The result of the function should be the truncated (if needed) string.

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  }
  return str;
}
console.log(truncate("Hello, welcome to Staytuned", 16)); // "Hello, welcome…"
console.log(truncate("Hello", 10)); // "Hello"

// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

function extractCurrencyValue(str) {
  return +str.slice(1);
}
console.log(extractCurrencyValue("$120")); // 120
console.log(extractCurrencyValue("$99.99")); // 99.99
