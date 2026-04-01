# 📘 Day 09 – JavaScript Fundamentals (TDZ & Hoisting)

## 📌 Overview

This repository is part of my **JavaScript learning journey (40 Days Challenge)**.
In **Day 09**, I focused on understanding two very important core concepts:

- Temporal Dead Zone (TDZ)
- Variable Hoisting
- Function Hoisting

These concepts help explain how JavaScript handles memory and execution behind the scenes.

---

## 🧩 **Task 1: Explain Temporal Dead Zone (TDZ)**

### 🔍 What is TDZ?

The **Temporal Dead Zone** is the time between when a block scope starts and when a `let` or `const` variable is declared.

During this time:

- The variable exists in memory
- But it **cannot be accessed**
- Accessing it results in a **ReferenceError**

```js
// TDZ (Temporal Dead Zone) happens with let and const
// It is the time between when the scope starts and when the variable is declared

{
  // TDZ starts here
  console.log(name); // ❌ ReferenceError: Cannot access 'name' before initialization

  let name = "Kiibay";
  // TDZ ends here
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

  const favLanguage = "JavaScript";
  // TDZ ends here
}
```

### 🧠 Explanation:

- `let` and `const` are **hoisted but not initialized**
- Accessing them before declaration → ❌ ReferenceError (TDZ)
- `var` is **hoisted and initialized with `undefined`**, so no TDZ

---

### 🧠 Key Points

- `let` and `const` → have TDZ
- `var` → does NOT have TDZ
- TDZ helps prevent using variables before declaration

## 🧩 **Task 2: Variable and Function Hoisting**

### 🔍 What is Hoisting?

Hoisting in the Global Execution Context is the process during the creation phase where JavaScript allocates memory for variables and functions—storing function declarations completely, initializing var as undefined, and placing let/const in the Temporal Dead Zone.

---

### 🔹 Variable Hoisting

```js
// Example with var
console.log(a); // ✅ undefined
var a = 10;
```

```js
// Example with let
console.log(b); // ❌ ReferenceError
let b = 20;
```

```js
// Example with const
console.log(c); // ❌ ReferenceError
const c = 30;
```

### 🧠 Explanation:

- During the **creation phase**:
  - `var` → hoisted and initialized with `undefined`
  - `let` and `const` → hoisted but stay in TDZ (not initialized)

- During the **execution phase**:
  - Variables are assigned their actual values

---

### 🔹 Function Hoisting

```js
// Function declaration is fully hoisted

isMillionaire(); // ✅ works

function isMillionaire() {
  console.log("Kiibay is a Millionaire");
}
```

```js
// Function expression is NOT fully hoisted

isRich(); // ❌ TypeError: isRich is not a function

var isRich = function () {
  console.log("Kiibay is Rich");
};
```

---

### 🧠 Explanation:

- Function declarations are **fully hoisted**, so they can be called before definition
- **Fully hoisted** means the JavaScript engine stores the entire function definition (as a callable unit) in memory during the creation phase, but the function’s internal variables are only hoisted when the function is executed and its own execution context is created.

- Function expressions behave like variables:
  - If declared with `var` → initialized as `undefined`
  - Calling before assignment → ❌ error

---

## 🔑 **Key Differences Summary**

- `var`
  - ✅ can redeclare
  - ✅ can reassign
  - ✅ initialized with `undefined`
  - ❌ no TDZ

- `let`
  - ❌ cannot redeclare
  - ✅ can reassign
  - ❌ has TDZ

- `const`
  - ❌ cannot redeclare
  - ❌ cannot reassign
  - ❌ has TDZ
  - ✅ must be initialized at declaration

---

## 🚀 What I Learned

- How JavaScript handles memory in **creation vs execution phase**
- Why accessing `let`/`const` before declaration causes errors
- The difference between **function declaration vs expression**
- The importance of understanding hoisting for debugging

---

## 🎯 Next Step

Moving forward to **Day 10**, where I will continue building deeper JavaScript knowledge and problem-solving skills.

---
