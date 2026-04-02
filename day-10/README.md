# 📘 Day 10 – JavaScript Scope, Hoisting, TDZ & Lexical Scope

Welcome to **Day 10** of the 40-day JavaScript challenge 🚀

Today’s focus is understanding how JavaScript manages variables and functions, including:

- Scope (global, function, block)
- Hoisting
- Temporal Dead Zone (TDZ)
- Shadowing
- Lexical scope
- Functions returning functions (foundation of closures)

---

# 🧩 Task 1 – TDZ and Shadowing

```js
let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }

  let user = "Bob";
  inner();
}

outer();
```

## ✅ Output

```
Bob
```

---

## 🧠 Step-by-Step Explanation

1. `user = "Alice"` is declared in the **global scope**.

2. `outer()` is called → creates a new execution context.

3. Inside `outer()`:
   - `inner()` is defined.
   - `let user` is hoisted → enters **TDZ (Temporal Dead Zone)**.

4. This line executes:

```js
let user = "Bob";
```

- `user` is now initialized → TDZ ends.

5. `inner()` is called:
   - Looks for `user` inside itself → ❌ not found
   - Looks in `outer()` → ✅ finds `"Bob"`

---

## 🔑 Key Learning

- TDZ only causes errors if a variable is accessed **before initialization**
- Inner functions follow **lexical scope**
- Local variables can **shadow** global ones

---

# 🧩 Task 2 – Global Variable Pitfall

```js
let total = 0;

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);
```

## ✅ Output

```
15
```

---

## 🧠 Explanation

- `total` is a **global variable**
- Each function call modifies the same variable

---

## ⚠️ Problem

- Global state is **unsafe**
- Any part of the program can change it

---

## ✅ Better Approaches

### 1. Pure Function

```js
function add(total, num) {
  return total + num;
}
```

### 2. Encapsulation

```js
function createAdder() {
  let total = 0;
  return function (num) {
    total += num;
    return total;
  };
}
```

---

## 🔑 Key Learning

- Avoid global variables for mutable data
- Prefer **pure functions** or **encapsulation**

---

# 🧩 Task 3 – Nested Function Access (Lexical Scope)

```js
function sayHi() {
  let name = "Kiibay";

  function inner() {
    console.log(name);
  }

  inner();
}

sayHi();
```

## ✅ Output

```
Kiibay
```

---

## 🧠 Explanation

- `inner()` is defined inside `sayHi()`
- It can access `name` from its **parent scope**

---

## 🔑 Key Learning

- Functions can access variables from where they are **defined**
- This is called **lexical scope**

---

# 🧩 Task 4 – Block Scope in Loops

```js
function loop() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  console.log(i);
}

loop();
```

## ✅ Output

```
1
2
3
4
5
ReferenceError
```

---

## 🧠 Explanation

- `let i` is **block-scoped**
- It only exists inside the `for` loop

---

## 🔑 Key Learning

- `let` / `const` → block scope
- `var` → function scope

---

# 🧩 Task 5 – Function Trying to Access Another Function’s Variable

```js
function outer() {
  let age = 25;
}

function inner() {
  console.log(age);
}

outer();
inner();
```

## ❌ Output

```
ReferenceError
```

---

## 🧠 Step-by-Step Explanation

1. `outer()` runs and creates `age = 25`.
2. After `outer()` finishes, `age` is **not accessible anymore**.
3. `inner()` tries to access `age`.
4. JavaScript cannot find `age` in:
   - `inner()` scope ❌
   - global scope ❌

→ So it throws a **ReferenceError**

---

## 🔑 Key Learning

- Variables inside a function are **private to that function**
- Functions cannot access each other's variables unless **nested**
- Scope depends on **where code is written**, not executed

---

# 🧩 Task 6 – Hoisting and TDZ

```js
console.log(a);
let a = 10;
```

## ❌ Output

```
ReferenceError
```

---

## 🧠 Explanation

- `let a` is hoisted but **not initialized**
- Accessing it before initialization → **TDZ error**

---

## 🔁 Comparison with `var`

```js
console.log(b); // undefined
var b = 10;
```

---

## 🔑 Key Learning

- `var` → hoisted + initialized with `undefined`
- `let/const` → hoisted but in **TDZ**

---

# 🧩 Task 7 – Function Scope

```js
function showAge() {
  let age = 25;
  console.log(age);
}

showAge();
console.log(age);
```

## ❌ Output

```
25
ReferenceError
```

---

## 🧠 Explanation

- `age` exists only inside `showAge()`
- Outside access → not allowed

---

## 🔑 Key Learning

- Functions create their own **scope**
- Variables inside functions are **not accessible outside**

---

# 🧩 Task 8 – Lexical Scope and Shadowing

```js
let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
```

## ✅ Output

```
Hi
```

---

## 🧠 Explanation

- Inner function uses the **closest variable**
- `"Hi"` shadows `"Hello"`

---

## 🔑 Key Learning

- Closest scope wins
- Shadowing overrides outer variables

---

# 🧩 Task 9 – Multi-Level Shadowing

```js
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
```

## ✅ Output

```
Inner
```

---

## 🧠 Explanation

- JavaScript searches from inner → outer
- Stops at the first match

---

## 🔑 Key Learning

- Inner-most variable takes priority

---

# 🧩 Task 10 – Function Returning Function

```js
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
```

## ✅ Output

```
-1
-2
```

---

## 🧠 Step-by-Step Explanation

1. `counter()` creates `count = 0`
2. Returns a function that uses `count`
3. `reduce` stores that function

### First call:

- `count--` → -1

### Second call:

- `count--` → -2

---

## 🔑 Key Learning

- Returned functions **remember variables** from where they were created
- This is the foundation of **closures**

---

# 🧠 Final Summary

## Core Concepts Learned

### 1. Lexical Scope

- Functions access variables where they are **defined**

### 2. Shadowing

- Inner variables override outer ones

### 3. Hoisting & TDZ

- `var` → hoisted + initialized (`undefined`)
- `let/const` → hoisted + TDZ

### 4. Scope Types

- Global
- Function
- Block

### 5. Encapsulation

- Avoid global variables

### 6. Function Memory

- Functions can retain access to outer variables (closures)
