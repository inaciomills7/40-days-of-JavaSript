//Task 1 - What will be the output of the following code and why?

let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

outer();

// Output -> Bob

// The output is "Bob" because the inner function is lexically scoped inside outer, so it accesses variables from outer's scope. Inside outer, the variable user is declared with let and assigned "Bob" before inner is called. This shadows the global user = "Alice". Therefore, when inner() executes, it finds user in the outer scope and logs "Bob". Note: if the inner() is is invoke before the user assigned with a value then inner() with be in the TDZ then it will throw an error!

// Task 2 - What is the mistake in the code below?
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);

// output -> 15

// The issue in this code is the use of a global variable total, which creates shared mutable state. This makes the program harder to maintain and debug because any part of the code can modify total.

//Task 3. Create a function with a nested function and log a variable from the parent function.

//option 1
function sayHi() {
  let name = "Kiibay";
  function inner() {
    console.log(name);
  }

  inner();
}

outer(); // kiibay

//Option 2

function sayHi() {
  let name = "Kiibay";
  return function () {
    console.log(name);
  };
}

const greet = sayHi();

greet(); // kiibay

// The nested function can access variables from its parent function due to lexical scope. Even if the parent function finishes execution, the inner function can still remember and use those variables if returned.

// Task 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

// Variables declared with let inside a loop are block-scoped, meaning they are only accessible within the loop block. Attempting to access them outside results in a ReferenceError. However, variables declared with var are function-scoped, so they remain accessible outside the loop but within the function.

//example

function loop() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  console.log(i);
}

loop();
//1 2 3 4 5
//reference error

function loop() {
  for (var i = 1; i <= 5; i++) {
    console.log(i);
  }

  console.log(i); // ✅ works
}

loop();
// 1 2 3 4 5
// 6

//Task 5 - Write a function that tries to access a variable declared inside another function.

// A variable declared inside a function is scoped to that function only. Other functions cannot access it, regardless of whether it is declared with var, let, or const.

function one() {
  let name = "kiibay";
}

function two() {
  console.log("Hi", name);
}

two(); //❌ referenceError

// ✔ to make it work we need to return the value from the function one and invoke the function one in the function two

function one() {
  let name = "Kiibay";
  return name;
}

function two() {
  console.log("Hi", one());
}

two(); //✔ Hi Kiibay

//Task 6 - What will be the output and why?

console.log(a); //❌ referenceError
let a = 10;

// The output is a ReferenceError because let variables are hoisted but remain uninitialized in the Temporal Dead Zone (TDZ) until their declaration is executed. Accessing them before initialization results in a runtime error, unlike var, which is initialized with undefined.

//Task 7 - Where is the age variable accessible?

function showAge() {
  let age = 25;
  console.log(age);
}

console.log(age); //referenceError

// The variable age is only accessible inside the showAge function because it is declared within that function’s scope. Variables declared inside a function are not accessible outside of it, regardless of whether they are declared using var, let, or const.

//Task 8 - What will be the output and explain the output?

let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();

// Output: Hi

// The output is "Hi" because inner() is lexically scoped inside outer(). It first looks for message in its own scope (none), then in outer()’s scope, where it finds let message = "Hi". This shadows the global message = "Hello".
// Important: if inner() were called before message was initialized, it would throw a ReferenceError due to the Temporal Dead Zone (TDZ). Since inner() is called after initialization, it logs "Hi".

//Task 9 - What will be the output and why?

let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x);
  }

  inner();
}

outer();

//Output : Inner

// The output is "Inner" because inner() is lexically scoped inside outer(). It declares its own let x = "Inner", which shadows x from outer() and the global scope. When console.log(x) runs, it finds x in its own scope. Important: if the console.log were placed before the declaration, it would throw a ReferenceError due to the Temporal Dead Zone (TDZ).

//Task 10 - What will be the output and why?

function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();

//Output
//-1
//-2

// The output is -1 and -2 because the function returned by counter() can access the count variable inside counter(), even after counter() has finished running. Each time we call reduce(), it decreases the same count variable and prints its value. The inner function keeps “remembering” the variable from where it was created, which is why the value continues to change with each call.
