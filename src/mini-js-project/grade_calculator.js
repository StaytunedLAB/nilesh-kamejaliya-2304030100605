// to run: path/../node grade_calculator.js
// basic grade calculator based on average marks

const marks = [78, 85, 90, 66, 72];

let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}

const avg = sum / marks.length;

let grade;
if (avg >= 90) grade = "A+";
else if (avg >= 80) grade = "A";
else if (avg >= 70) grade = "B";
else if (avg >= 60) grade = "C";
else grade = "D";

console.log("Marks:", marks);
console.log("Average:", avg.toFixed(2));
console.log("Grade:", grade);

