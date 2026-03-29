// Task 1: Declare Variables

// Using let (can be reassigned)
let name = "Kiibay";
let age = 77;

// Boolean
let isStudent = true;

// Using const (cannot be reassigned)
const favoriteLanguage = "JavaScript";

// Task 2: Print to Console

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Favorite Language:", favoriteLanguage);

// Task 3: Reassign let vs const
name = "Alice";
age = 25;

console.log("Updated Name:", name);
console.log("Updated Age:", age);

favoriteLanguage = "Python"; // ❌ This will throw an error

// Task 4 Objects & Arrays

// Object Example
const person = {
  name: "Arnol",
  age: 20,
};

// Assign to new variable
const newPerson = person;

// Modify new variable
newPerson.age = 30;

console.log(person.age); // 30

//Array Example
const numbers = [1, 2, 3];

// Assign to new variable
const newNumbers = numbers;

// Modify
newNumbers.push(4);

console.log(numbers); // [1, 2, 3, 4]
