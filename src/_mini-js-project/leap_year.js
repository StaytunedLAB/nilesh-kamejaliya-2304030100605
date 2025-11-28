// run: path/../node leap_year.js
// basic leap year checker

function isLeapYear(year) {
  // A year is leap if:
  // 1. divisible by 400  → leap
  // 2. divisible by 4 AND NOT divisible by 100 → leap

  if (year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}

// Example
const year = 2025;
console.log(`Year: ${year}`);
console.log(isLeapYear(year) ? "Leap Year" : "Not a Leap Year");
