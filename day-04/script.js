//Task 1.

let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

// because swith is case sensitive the output will be:
// "It's a normal day"

//Task 2 -  ATM Cash Withdrawal System
const amount = 250;

if (amount > 0 && amount % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid amount");
}

//Task 3 - Calculator with switch-case

const numOne = 5;
const numTwo = 2;
const operator = "+";

switch (operator) {
  case "+":
    console.log(numOne + numTwo);
    break;
  case "-":
    console.log(numOne - numTwo);
    break;
  case "/":
    console.log(numOne / numTwo);
    break;
  case "*":
    console.log(numOne * numTwo);
    break;
  case "%":
    console.log(numOne % numTwo);
    break;

  default:
    console.log("Invalid Operator");
}

//Task 4 - ticket prices
const age = 18;
if (age < 18) {
  console.log("children : $3");
} else if (age >= 18 && age <= 60) {
  console.log("Adults : $10");
} else {
  console.log("Senior : $8");
}

//Task 5 - Horoscope Sign Checker

const month = "february";

switch (month.toLowerCase()) {
  case "march":
  case "april":
    console.log("Aries");
    break;

  case "april":
  case "may":
    console.log("Taurus");
    break;

  case "may":
  case "june":
    console.log("Gemini");
    break;

  case "june":
  case "july":
    console.log("Cancer");
    break;

  case "july":
  case "august":
    console.log("Leo");
    break;

  case "august":
  case "september":
    console.log("Virgo");
    break;

  case "september":
  case "october":
    console.log("Libra");
    break;

  case "october":
  case "november":
    console.log("Scorpio");
    break;

  case "november":
  case "december":
    console.log("Sagittarius");
    break;

  case "december":
  case "january":
    console.log("Capricorn");
    break;

  case "january":
  case "february":
    console.log("Aquarius");
    break;

  case "february":
  case "march":
    console.log("Pisces");
    break;

  default:
    console.log("Invalid month");
}

//Task 6 - Type of Triangle
const sideOne = 7;
const sideTwo = 7;
const sideThree = 7;

if (
  // validation : A triangle can only exist if: The sum of any two sides is greater than the third side
  sideOne + sideTwo > sideThree &&
  sideOne + sideThree > sideTwo &&
  sideTwo + sideThree > sideOne
) {
  if (sideOne === sideTwo && sideOne === sideThree) {
    console.log(" Equilateral Triangle");
  } else if (
    sideOne === sideTwo ||
    sideOne === sideThree ||
    sideTwo === sideThree
  ) {
    console.log("Isosceles Triangle.");
  } else {
    console.log("Scalene Triangle.");
  }
}
