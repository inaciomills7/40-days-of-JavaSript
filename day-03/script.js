//Task 1 - Odd or Even?
let num = 7;
console.log(`${num} is ${num % 2 === 0 ? "even" : "odd"}`);

//Task 2 - check for eligibility to get a driver license
let age = 18;
const isEligible =
  age >= 18
    ? `You are (${age}) and eligible for a driving license`
    : `You are (${age}) and NOT eligible`;

console.log(isEligible);

//Task 3 - Calculate CTC with a Bonus
const monthlySalary = 12300;
const annualSalary = monthlySalary * 12;
const bonus = annualSalary * 0.2;

console.log(`CTC per annum: ${annualSalary + bonus} Rupees`);

//Task 4 -  Traffic Light Simulation.
const color = "green";
console.log(color === "red" ? "STOP!" : color === "green" ? "GO!" : "WAIT"); //the WAIT represent another colors

//Task 5 - Electricity Bill Calculator
const unitPerDay = 3;
const costPerUnit = 150;
const monthlyCharge = unitPerDay * 30 * costPerUnit;

const yearlyCharge = monthlyCharge * 12;
const discountedYearly = yearlyCharge * 0.8;

console.log(`Monthly: ${monthlyCharge} Rupees`);
console.log(`Yearly after discount: ${discountedYearly} Rupees`);

//Task 6 - Leap Year
const year = 2028;
const isLeapYear =
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? "Leap Year"
    : "Not a Leap Year";

console.log(`${year} is ${isLeapYear}`);

//Task 7 - Max of Three Numbers
const p = 6;
const q = 2;
const r = 7;

if (p > q && p > r) {
  console.log(`${p} is the Max number`);
} else if (q > r) {
  console.log(`${q} is the Max number`);
} else {
  console.log(`${r} is the Max number`);
}

//Task 7 - Bitwise Doubling
const count = 5;
const doubled = count << 1;
console.log(`double of ${count} = ${doubled}`);
