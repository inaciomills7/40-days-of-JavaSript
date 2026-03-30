//Task 1. Generate a Pyramid Pattern using Nested Loop

const char = "*";
const num = 5;
let result = "";
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    result += char;
  }
  result += "\n";
}

console.log(result);

//Task 2. Craete Multiplication Table (Using for loop)
const N = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${N} * ${i} = ${N * i}`);
}

//Task 3. summation of all odd numbers between 1 to 500

let sum = 0;

// for (let i = 1; i <= 500; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }

//other alternative clean & faster; skip even number completely
for (let i = 1; i <= 500; i += 2) {
  sum += i;
}

console.log(`sum of odd numbers bitween 1-500 : ${sum}`);

//Task 4. Skipping Multiples of 3

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

//Task 5. Reverse Digits of a Number (while loop)
let myNum = "12345";
let digit = 0;
let reversed = "";
while (myNum > 0) {
  digit = myNum % 10;
  reversed = reversed * 10 + digit;
  myNum = Math.floor(myNum / 10);
}
console.log(`reversed: ${reversed}`);

//Task 6. difefrences between for, while, and do-while loop

// for loop:
// Used when the number of iterations is known.
// Structure: initialization → condition → increment

// while loop:
// Used when the number of iterations is unknown.
// Condition is checked before execution.

// do...while loop:
// Executes at least once before checking the condition.
// Useful when the loop must run at least one time.
