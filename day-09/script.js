//Task 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

// TDZ (Temporal Dead Zone) happens with let and const
// It is the time between when the scope starts and when the variable is declared

{
  // TDZ starts here
  console.log(name); // ❌ ReferenceError: Cannot access 'name' before initialization

  // TDZ ends here
  let name = "Kiibay";
}

{
  // var does NOT have TDZ
  // During creation phase, it is initialized with undefined

  console.log(age); // ✅ undefined

  var age = 77;
}

{
  // TDZ also applies to const

  // TDZ starts here
  console.log(favLanguage); // ❌ ReferenceError

  // TDZ ends here
  const favLanguage = "JavaScript";
}

// let and const are hoisted but not initialized
// Accessing them before declaration => ReferenceError (TDZ)
// var is hoisted and initialized with undefined, so no TDZ

//Task 2 - Explain Variable and Function Hoisting with Example. Post the code as your answer.

// - variable Hoisting

// Example with var
console.log(a); // ✅ undefined

var a = 10;

// Example with let
console.log(b); // ❌ ReferenceError

let b = 20;

// Example with const
console.log(c); // ❌ ReferenceError

const c = 30;

// During the creation phase:
//   var => hoisted and initialized with undefined
//   let and const => hoisted but stay in TDZ (not initialized)
// During the execution phase:
//   Variables are assigned their actual values

// -  Function Hoisting

// Function declaration is fully hoisted

isMillionaire(); // ✅ works

function isMillionaire() {
  console.log("Kiibay is a Millionaire");
}

// Function expression is NOT fully hoisted

isRich(); // ❌ TypeError: isRich is not a function

var isRich = function () {
  console.log("Kiibay is Rich");
};

// Function declarations are fully hoisted the entire function definition is moved to memory during the creation phase, allowing it to be called even before definition

// “Fully hoisted” means the JavaScript engine stores the entire function definition (as a callable unit) in memory during the creation phase, but the function’s internal variables are only hoisted when the function is executed and its own execution context is created.

// Function expressions behave like variables:
// If declared with var → initialized as undefined
// Calling before assignment → ❌ error

// Key Differences Summary
// var
//    ✅ can redeclare
//    ✅ can reassign
//    ✅ initialized with undefined
//    ❌ no TDZ
// let
//    ❌ cannot redeclare
//    ✅ can reassign
//    ❌ has TDZ
// const
//    ❌ cannot redeclare
//    ❌ cannot reassign
//    ❌ has TDZ
//    ✅ must be initialized at declaration
