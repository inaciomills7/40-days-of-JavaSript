#**Task 1. Create a table of two columns, situation and value. Now add the rows for every situations and the value of this in that situation. Please cover the following situations**

- At the Global
- Inside an Object Method
- Inside the Satandalone non-Arrow Function
- Inside an Arrow Function(standalone)
- Inside an Arrow Function(as object method)
- Inside an object created with the Constructor Function
- Please add examples for each of the scenarios.

## 📘 Understanding `this` in JavaScript

This guide explains how the `this` keyword behaves in different situations in JavaScript, along with examples.

---

## 📊 Summary Table

| Situation                      | Value of `this`                                   |
| ------------------------------ | ------------------------------------------------- |
| Global Scope                   | `window` (browser) / `undefined` (strict mode)    |
| Object Method                  | The object that calls the method                  |
| Standalone Function            | `window` (non-strict) / `undefined` (strict mode) |
| Arrow Function (standalone)    | Inherits from surrounding scope                   |
| Arrow Function (object method) | Inherits from surrounding scope (usually global)  |
| Constructor Function (`new`)   | The newly created instance                        |
| Arrow inside Normal Method     | Inherits `this` from the normal method (object)   |

---

## 1️⃣ Global Scope

```js
console.log(this);
```

### Explanation

- In a browser (non-strict mode), `this` refers to the `window` object.
- In strict mode, `this` is `undefined`.

---

## 2️⃣ Inside an Object Method

```js
const obj = {
  name: "Object Method",
  method: function () {
    console.log(this);
    console.log(this.name);
  },
};

obj.method();
```

### Explanation

- `this` refers to the object (`obj`).
- This is called **implicit binding**.

---

## 3️⃣ Standalone Non-Arrow Function

```js
function standaloneFunction() {
  console.log(this);
}

standaloneFunction();
```

### Explanation

- In non-strict mode → `this` is `window`.
- In strict mode → `this` is `undefined`.

---

## 4️⃣ Arrow Function (Standalone)

```js
const arrowFunction = () => {
  console.log(this);
};

arrowFunction();
```

### Explanation

- Arrow functions **do not have their own `this`**.
- They inherit `this` from the surrounding (lexical) scope.

---

## 5️⃣ Arrow Function as Object Method

```js
const objWithArrow = {
  name: "Object with Arrow Function",
  arrowMethod: () => {
    console.log(this);
    console.log(this.name);
  },
};

objWithArrow.arrowMethod();
```

### Explanation

- `this` does **not** refer to the object.
- It refers to the outer scope (usually `window`).
- `this.name` is often `undefined`.

---

## 6️⃣ Constructor Function

```js
function ConstructorFunction(name) {
  this.name = name;
  console.log(this);
}

const instance = new ConstructorFunction("Constructor Instance");
```

### Explanation

- When using `new`, JavaScript creates a new object.
- `this` refers to that new instance.

---

## 7️⃣ Arrow Function Inside a Normal Method

```js
const objWithNormalFunction = {
  name: "Object with Normal Function",
  normalMethod: function () {
    const arrow = () => {
      console.log(this);
      console.log(this.name);
    };
    arrow();
  },
};

objWithNormalFunction.normalMethod();
```

### Explanation

- The normal function has its own `this` (the object).
- The arrow function inherits that `this`.
- So `this` still refers to the object.

---

## 🧠 Key Rules to Remember

1. `this` depends on **how a function is called**, not where it is defined.
2. Arrow functions **do not bind `this`** — they inherit it.
3. In regular functions:
   - Method call → object
   - Standalone call → global / undefined

4. Using `new` → `this` becomes the new object.

---

## 🚀 Bonus: `call`, `apply`, and `bind`

```js
function test() {
  console.log(this);
}

test.call({ name: "Custom" });
```

### Explanation

- You can manually set `this` using:
  - `call()`
  - `apply()`
  - `bind()`

---

## 📌 Final Summary

Understanding `this` is essential in JavaScript. The behavior changes depending on execution context, making it one of the most important concepts to master for writing clean and predictable code.

---

# 📘 Task 2 – Fixing `this` in an Object Method (Arrow Function Issue)

## 🚀 Problem Statement

Given the following code:

```js
const user = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();
```

### ❌ Output:

```
Hello, undefined!
```

---

## 🔍 Why Does This Happen?

The issue is caused by the use of an **arrow function** as an object method.

### ⚠️ Key Rule:

> Arrow functions **do NOT have their own `this`**.
> They inherit `this` from their **lexical (outer) scope**.

---

### 🧠 What’s happening here?

- The `greet` method is an arrow function.
- It does **not bind `this` to the `user` object**.
- Instead, it inherits `this` from the surrounding scope (global scope).
- In the global scope:
  - `this` → `window` (browser)
  - `window.name` → `undefined`

👉 Therefore:

```js
this.name; // undefined
```

---

## ✅ Solution 1: Use a Regular Function (Recommended)

```js
const user = {
  name: "tapaScript",
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet(); // Hello, tapaScript!
```

### ✔️ Why it works:

- Regular functions have their **own `this`**
- When called as a method:

  ```js
  user.greet();
  ```

  → `this` refers to `user`

---

## ✅ Solution 2: Arrow Function Inside a Regular Method

```js
const user = {
  name: "tapaScript",
  greet() {
    const sayHi = () => {
      console.log(`Hello, ${this.name}!`);
    };
    sayHi();
  },
};

user.greet(); // Hello, tapaScript!
```

### ✔️ Why it works:

- The outer function (`greet`) has correct `this` (`user`)
- The arrow function inherits `this` from `greet`

---

## 🧠 Key Takeaways

- ❌ Never use arrow functions as object methods when you need `this`
- ✅ Use regular functions for methods
- ✅ Use arrow functions for:
  - Callbacks
  - Nested functions (to preserve `this`)

---

## 🎯 Final Insight

> `this` is determined by **how a function is called**,
> but arrow functions ignore this rule and **inherit from their surrounding scope**.

---

# 📘 Task 3 – Losing `this` When Detaching a Method

## 🚀 Problem Statement

Consider the following code:

```js
const obj = {
  name: "Tom",
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn();
```

### ❌ Output:

```
Hello, undefined!
```

---

## 🔍 Why Does This Happen?

### ⚠️ Key Rule:

> `this` is determined by **how a function is called**, not where it is defined.

---

### 🧠 What’s happening step by step:

1. `obj.greet` is a method → normally `this` would refer to `obj`

2. But then:

   ```js
   const greetFn = obj.greet;
   ```

   The function is **detached** from the object

3. When calling:

   ```js
   greetFn();
   ```

   it becomes a **standalone function call**

4. Therefore:
   - In non-strict mode → `this` = `window`
   - In strict mode → `this` = `undefined`

👉 Result:

```js
this.name; // undefined
```

---

## ✅ Solutions

### ✔️ Solution 1: Use `bind` (Best for permanent fix)

```js
const boundGreet = obj.greet.bind(obj);
boundGreet(); // Hello, Tom!
```

### ✔️ Why it works:

- `bind()` creates a **new function**
- It permanently sets `this` to `obj`

---

### ✔️ Solution 2: Use `call`

```js
greetFn.call(obj); // Hello, Tom!
```

### ✔️ Why it works:

- `call()` invokes the function immediately
- Explicitly sets `this` to `obj`

---

### ✔️ Solution 3: Use `apply`

```js
greetFn.apply(obj); // Hello, Tom!
```

### ✔️ Why it works:

- Same as `call()`, but arguments are passed as an array

---

### ✔️ Solution 4: Call the method directly

```js
obj.greet(); // Hello, Tom!
```

### ✔️ Why it works:

- The function is called as a **method**
- JavaScript automatically binds `this` to `obj`

---

## ⚠️ Important Notes

| Method      | Permanent Fix? | Description                                   |
| ----------- | -------------- | --------------------------------------------- |
| `bind`      | ✅ Yes         | Returns a new function with fixed `this`      |
| `call`      | ❌ No          | Calls function immediately with custom `this` |
| `apply`     | ❌ No          | Same as call, but arguments as array          |
| Direct call | ✅ Yes         | Keeps method attached to object               |

---

## 🧠 Key Takeaways

- Detaching a method = **losing its `this` context**
- `this` depends on the **call site**
- Use:
  - `bind()` → when passing functions around
  - `call()` / `apply()` → for immediate execution

---

## 🎯 Final Insight

> When you extract a method from an object,
> you also extract it from its `this`.

---

# 📘 Task 4 – `this` Lost Inside a Nested Function

## 🚀 Problem Statement

Consider the following code:

```js
const user = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user.greet();
```

### ❌ Output:

```
Hello, undefined!
```

---

## 🔍 Why Does This Happen?

### ⚠️ Key Rule:

> `this` depends on **how a function is called**, not where it is defined.

---

## 🧠 Step-by-Step Explanation

1. `greet()` is called as a method:

   ```js
   user.greet();
   ```

   ✅ Inside `greet`, `this` → `user`

2. Inside `greet`, we define:

   ```js
   function inner() { ... }
   ```

3. Then we call:

   ```js
   inner();
   ```

   ❌ This is a **standalone function call**

4. Therefore:
   - In non-strict mode → `this` = `window`
   - In strict mode → `this` = `undefined`

👉 Result:

```js
this.name; // undefined
```

---

## ❗ Root Cause

The `inner` function is **not a method of the object**.

It does **not inherit `this`** from `greet()` because:

- Regular functions have their **own `this`**
- And `this` is determined at **call time**

---

## ✅ Solutions

---

### ✔️ Solution 1: Use an Arrow Function (Best & Modern)

```js
const user = {
  name: "Alex",
  greet() {
    const inner = () => {
      console.log(`Hello, ${this.name}!`);
    };
    inner();
  },
};

user.greet(); // Hello, Alex!
```

### ✔️ Why it works:

- Arrow functions **do NOT have their own `this`**
- They inherit `this` from `greet()`
- So `this` → `user`

---

### ✔️ Solution 2: Use `bind`

```js
const user = {
  name: "Alex",
  greet() {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    const boundInner = inner.bind(this);
    boundInner();
  },
};

user.greet(); // Hello, Alex!
```

### ✔️ Why it works:

- `bind(this)` permanently sets `this` to `user`

---

### ✔️ Solution 3: Store `this` in a Variable (Classic Approach)

```js
const user = {
  name: "Alex",
  greet() {
    const self = this;
    function inner() {
      console.log(`Hello, ${self.name}!`);
    }
    inner();
  },
};

user.greet(); // Hello, Alex!
```

### ✔️ Why it works:

- `self` keeps a reference to the correct context

---

## ⚠️ Important Comparison

| Approach         | Has Own `this`? | Behavior                  |
| ---------------- | --------------- | ------------------------- |
| Regular Function | ✅ Yes          | Depends on call site      |
| Arrow Function   | ❌ No           | Inherits from outer scope |

---

## 🧠 Key Takeaways

- Nested regular functions **lose `this`**
- Arrow functions help **preserve `this`**
- `bind()` can **manually fix context**
- `this` is always about **how the function is called**

---

## 🎯 Final Insight

> A function inside a method is **NOT automatically part of the object**.

---

# 📘 Task 5 – Constructor Function and `this` in JavaScript

## 🚀 Problem Statement

Create a **constructor function** called `Sports` that:

- Takes `name` and `numberOfPlayers` as arguments
- Assigns them using the `this` keyword
- Creates multiple instances and logs their details

---

## 🧠 Understanding Constructor Functions

### ⚠️ Key Rule:

> When a function is called with the `new` keyword, JavaScript:

1. Creates a new empty object
2. Sets `this` to point to that object
3. Links the object to the constructor’s prototype
4. Returns the object automatically

---

## ✅ Basic Implementation

````js
function Sports(name, numberOfPlayers) {
  this.name = name;
  this.numberOfPlayers = numberOfPlayers;
}

const soccer = new Sports("Soccer", 11);
const basketball = new Sports("Basketball", 5);

console.log(soccer);
console.log(basketball);


---

### 📌 Output:

```js
Sports { name: 'Soccer', numberOfPlayers: 11 }
Sports { name: 'Basketball', numberOfPlayers: 5 }
````

---

## 🧾 Logging Details in a Readable Format

```js
console.log(`Sport: ${soccer.name}, Players: ${soccer.numberOfPlayers}`);
console.log(
  `Sport: ${basketball.name}, Players: ${basketball.numberOfPlayers}`,
);
```

---

## ✅ Adding Methods (Best Practice: Using Prototype)

> ⚠️ Note : we haven't learned about this yet in day 13. but for this problem, i have to share here. I used to evaluate my solution compare with more efficient solution and it's fine to include and share here. Because i made the common mistake that a lot of programmers also made.

```js
Sports.prototype.getDetails = function () {
  console.log(`Sport: ${this.name}, Players: ${this.numberOfPlayers}`);
};

soccer.getDetails();
basketball.getDetails();
```

---

### ✔️ Why use `prototype`?

- Avoids duplicating the method for every instance
- Saves memory
- Follows best practices for constructor functions

---

## ⚠️ Common Mistake

### ❌ Defining methods inside constructor

```js
function Sports(name, numberOfPlayers) {
  this.name = name;
  this.numberOfPlayers = numberOfPlayers;

  this.getDetails = function () {
    console.log(`Sport: ${this.name}, Players: ${this.numberOfPlayers}`);
  };
}
```

### ⚠️ Problem:

- Each instance gets its **own copy** of the method
- Inefficient for memory

---

## 🧠 Key Takeaways

- `this` inside a constructor refers to the **newly created object**
- Always use `new` when calling constructor functions
- Use `prototype` to define shared methods
- Constructor functions are the foundation of **object-oriented JavaScript**

---

## 🎯 Final Insight

> Constructor functions allow you to create multiple objects with the same structure using `this` and `new`.

---

# 📘 Task 6 – Method Borrowing in JavaScript

## 🚀 Objective

Attach or reuse a method from one object (`car1`) on another object (`car2`) so that it correctly uses `car2`'s data.

---

## 🧾 Given Code

````js
const car1 = {
  brand: "Audi",
  model: "A8",
  describe() {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};


---

## ❓ Problem

How can we use `car1.describe()` to describe `car2`?

---

## 🧠 Key Concept: Method Borrowing

> Method borrowing allows one object to use a method from another object by controlling the value of `this`.

---

## ✅ Solutions

---

### ✔️ Solution 1: Using `call`

```js
car1.describe.call(car2);
// Output: This car is a BMW X1.
````

### 💡 Why it works:

- `call()` invokes the function immediately
- Sets `this` to `car2`

---

### ✔️ Solution 2: Using `apply`

```js
car1.describe.apply(car2);
// Output: This car is a BMW X1.
```

### 💡 Why it works:

- Similar to `call()`
- Accepts arguments as an array

---

### ✔️ Solution 3: Using `bind`

```js
const describeCar2 = car1.describe.bind(car2);
describeCar2();
// Output: This car is a BMW X1.
```

### 💡 Why it works:

- Returns a new function
- Permanently binds `this` to `car2`

---

### ✔️ Solution 4: Assigning the Method

```js
car2.describe = car1.describe;
car2.describe();
// Output: This car is a BMW X1.
```

### 💡 Why it works:

- The method is now part of `car2`
- Called as a method → `this` becomes `car2`

---

### ✔️ Solution 5: Using `Object.assign`

```js
Object.assign(car2, { describe: car1.describe });
car2.describe();
```

---

### ✔️ Solution 6: Custom Copy Function

```js
function copyMethod(source, target) {
  target.describe = source.describe;
}

copyMethod(car1, car2);
car2.describe();
```

---

## ⚠️ Important Comparison

| Method     | Executes Immediately     | Permanent |
| ---------- | ------------------------ | --------- |
| `call`     | ✅ Yes                   | ❌ No     |
| `apply`    | ✅ Yes                   | ❌ No     |
| `bind`     | ❌ No (returns function) | ✅ Yes    |
| Assignment | ❌ No                    | ✅ Yes    |

---

## 🧠 Key Takeaways

- `this` depends on **how a function is called**
- Methods can be reused across objects
- `call`, `apply`, and `bind` control `this`
- Direct assignment makes the method part of another object

---

## 🎯 Final Insight

> You don’t need to rewrite logic—just reuse it by controlling `this`.

---

# 📘 Task 7 – Understanding `this` in Regular vs Arrow Functions

## 🚀 Problem Statement

Analyze the following code and determine the output:

````js
const person = {
  name: "Charlie",
  sayHello() {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();


---

## ❓ Question

What will be the output?

* A: `"Charlie"` and `"Charlie"`
* B: `"Charlie"` and `undefined`
* C: `"Charlie"` and `""` (empty string)
* D: `undefined` and `"Charlie"`

---

## ✅ Correct Answer

**B: `"Charlie"` and `undefined`**

---

## 🧠 Explanation

### ✔️ 1. Regular Method (`sayHello`)

```js
person.sayHello();
````

- Called as a method of `person`
- `this` refers to the `person` object

👉 Result:

```js id="l9k2dw"
this.name; // "Charlie"
```

---

### ❌ 2. Arrow Function (`sayHelloArrow`)

```js
person.sayHelloArrow();
```

- Arrow functions do **NOT have their own `this`**
- They inherit `this` from the **outer (lexical) scope**

---

### 🧠 What is the outer scope here?

- The arrow function is defined in the **global scope**
- So it inherits:
  - `this` → `window` (browser)
  - `window.name` → `undefined`

👉 Result:

```js id="5o2k1m"
this.name; // undefined
```

---

## ⚠️ Key Difference

| Function Type    | Has Own `this`? | Value of `this`               |
| ---------------- | --------------- | ----------------------------- |
| Regular Function | ✅ Yes          | Determined by how it's called |
| Arrow Function   | ❌ No           | Inherited from outer scope    |

---

## 💡 Important Insight

> Even though `sayHelloArrow` is inside an object,
> it does **NOT** make it a method in terms of `this`.

---

## 🧠 Key Takeaways

- Regular methods:
  - `this` → the object

- Arrow functions:
  - `this` → outer scope

- Do **NOT** use arrow functions as object methods when you need `this`

---

## 🎯 Final Insight

> Arrow functions ignore how they are called —
> they always use the `this` from where they are defined.

---

> ⚠️ I have also explained deeply in script.js file, with a lot of example and explanation
