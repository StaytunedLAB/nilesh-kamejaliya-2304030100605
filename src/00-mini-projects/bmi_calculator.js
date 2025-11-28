// to run: path/../node bmi_calculator.js
// basic BMI (Body Mass Index) calculator

function calculateBMI(weightKg, heightM) {
  const bmi = weight / (height * height);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obesity";
  }
}

// Example:
const weight = 70; // in kilograms
const height = 1.75; // in meters

console.log(`\nWeight: ${weight}kg | Height: ${height}m`);
console.log(`\nBMI Category: ${calculateBMI(weight, height)}\n`);
