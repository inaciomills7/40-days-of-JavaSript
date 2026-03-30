🚀 Day 02 - 40 Days of JavaScript
This repository contains my solutions for Day 02 of the 40 Days of JavaScript challenge from tapaScript.

# Reassign `let` vs `const`

🔁 Reassign `let` (✅ allowed)

name = "John";
age = 25;

console.log("Updated Name:", name);
console.log("Updated Age:", age);

❌ Reassign `const` (ERROR)

favoriteLanguage = "Python"; // ❌ This will throw an error

👉 Error you’ll see:
Uncaught TypeError: Assignment to constant variable.

# Objects & Arrays

🧱 Object Example

const person = {
name: "Arnol",
age: 20
};

// Assign to new variable
const newPerson = person;

// Modify new variable
newPerson.age = 30;

console.log(person.age);
Output: 30

Because:
👉 Objects are reference types

Both variables point to the "same object in memory" (heap memory address)

🧱 Array Example

const numbers = [1, 2, 3];

// Assign to new variable
const newNumbers = numbers;

// Modify
newNumbers.push(4);

console.log(numbers);

Output: [1, 2, 3, 4]

# Important Rule

Primitive type : copied by value
Object/array : copied by reference

# Note:

If you want a real copy (not linked):

const copyPerson = { ...person };
copyPerson.age = 50;

console.log(person.age); // stays unchanged

# What we Should Notice

✔ `let` can change, `const` cannot
✔ Objects/arrays behave differently than primitives
✔ Modifying a copied object affects the original
