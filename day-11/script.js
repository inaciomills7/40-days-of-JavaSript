//Task 1 - What will be the output of the following code and why?

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();

// Output :
// //1
// //2

//The output is 1 and 2 because the inner function accesses the count variable from the outer function and increments it each time it runs.
// This works because of lexical scope — the inner function is defined inside outer, so it can access its variables.
// Even after outer() finishes execution, the inner function still remembers the count variable. This is called a closure.
// When we assign outer() to counter, we are storing the returned inner function. Each time we call counter(), it uses the same count variable and increases it by 1.

// Task 2 - What will be the output and why?

function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()());

// output : 100;

// The output is 100 because the testClosure function creates a variable x = 10 and returns an inner function that returns x * x.
// When we call testClosure()(), the first () runs testClosure and returns the inner function, and the second () immediately calls that returned function.
// The inner function remembers the value of x due to closure, so it calculates 10 * 10 and returns 100. testClosure()() function returning another function that is immediately executed.

//Task 3 - Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

function countClick() {
  let counter = 0;

  //create button dynamically
  const button = document.createElement("button");
  button.textContent = "Click me";

  //add button to the page
  document.body.appendChild(button);

  // Attach event listener (closure in action)
  button.addEventListener("click", () => {
    counter++;
    console.log(`Button has been clicked ${counter} times`);
  });
}

countClick();

// This works because the counter variable is defined inside the countClick function and is captured by the event listener function.
// The event listener forms a closure, which allows it to remember and update the counter variable even after countClick has finished executing.
// Each time the button is clicked, the same counter variable is incremented and logged, showing how many times the button has been clicked.

//Task 4 - Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier) {
  return function (num) {
    return multiplier * num;
  };
}

function createMultiplier(multiplier) {
  return function (num) {
    return multiplier * num;
  };
}

// Example usage
const double = createMultiplier(2);
console.log(double(5)); // 10

const triple = createMultiplier(3);
console.log(triple(5)); // 15

//Task 5 What happens if a closure references an object?

// When a closure references an object:

// - Closure Keeps the Reference Alive

function createObject() {
  const obj = { name: "Kiibay" };
  return function () {
    console.log(obj.name);
  };
}

const showObj = createObject();
showObj(); // "Kiibay"

// - showObj is a closure

// It remembers the object obj even after createObject() has finished executing
// The object cannot be garbage collected because the closure still holds a reference to it

// - Implications for Memory

// As long as the closure exists:
// The object stays in memory
// This is because closures capture references, not copies
// If you have a large object and keep closures pointing to it unnecessarily, it can increase memory usage

// - Key Takeaways

// Closures capture variables by reference, including objects
// Objects referenced by closures remain in memory until the closure is no longer accessible
// Useful: private state for objects
// Caution: can cause memory leaks if you keep closures around unnecessarily

//Task 6 - Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

function funFactory() {
  let counter = 0; // private variable

  return {
    increment: () => {
      counter++;
      return counter; // return the updated value
    },
    decrement: () => {
      counter--;
      return counter; // return the updated value
    },
    reset: () => {
      counter = 0;
      return counter; // return the reset value
    },
  };
}

const count = funFactory();

console.log(count.increment()); // 1
console.log(count.increment()); // 2
console.log(count.decrement()); // 1
console.log(count.reset()); // 0
