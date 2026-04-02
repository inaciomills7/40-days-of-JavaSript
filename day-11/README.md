# Day 11 – JavaScript Closures

Welcome to **Day 11** of the 40-day JavaScript challenge!

Today, we are focusing on **closures** — one of the most powerful concepts in JavaScript. Closures allow a function to **remember variables from its outer scope even after the outer function has finished executing**.

---

## 🔹 What is a Closure?

A **closure** is a function that:

- Remembers variables from the scope where it was defined
- Can access and update those variables even after the outer function has finished
- Can be used to create **private state**, persistent counters, or function factories

---

## Task 1 – Increment Counter with Closure

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

**Explanation:**

- `outer()` creates a variable `count = 0` and returns `inner()`.
- `inner()` can access `count` because it is **lexically scoped** inside `outer()`.
- Even after `outer()` finishes, the returned function (`counter`) remembers `count`.
- Each call increments the same `count` variable — this is a **closure in action**.

---

## Task 2 – Function Returning Function

```js
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}

console.log(testClosure()()); // 100
```

**Explanation:**

- `testClosure()` creates `x = 10` and returns an inner function.
- `testClosure()()`:
  - First `()` calls `testClosure` → returns the inner function
  - Second `()` calls the returned function immediately

- The inner function remembers `x` and calculates `x * x` → `100`.

---

## Task 3 – Button Click Counter with Closure

```js
function countClick() {
  let counter = 0;

  const button = document.createElement("button");
  button.textContent = "Click me";
  document.body.appendChild(button);

  button.addEventListener("click", () => {
    counter++;
    console.log(`Button has been clicked ${counter} times`);
  });
}

countClick();
```

**Explanation:**

- `counter` is private to `countClick()`.
- The event listener forms a **closure** that remembers `counter`.
- Each click updates the **same `counter` variable** and logs it.
- Even after `countClick()` finishes, the closure keeps `counter` alive.

---

## Task 4 – Function Factory: Multipliers

```js
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
```

**Explanation:**

- `createMultiplier(multiplier)` returns an inner function that multiplies `num` by `multiplier`.
- Each returned function **remembers its own `multiplier`** via closure.
- This allows creating specialized functions like `double` and `triple`.

---

## Task 5 – Closures Referencing Objects

```js
function createObject() {
  const obj = { name: "Kiibay" };
  return function () {
    console.log(obj.name);
  };
}

const showObj = createObject();
showObj(); // "Kiibay"
```

**Explanation:**

- Closures capture **object references**, not copies.
- `showObj` remembers `obj` even after `createObject()` finishes.
- Objects stay in memory as long as the closure exists → can be **used as private state**.
- ⚠️ Keep in mind: unnecessary closures holding large objects may cause **memory leaks**.

---

## Task 6 – Counter Factory with Increment, Decrement, Reset

```js
function funFactory() {
  let counter = 0; // private variable

  return {
    increment: () => {
      counter++;
      return counter;
    },
    decrement: () => {
      counter--;
      return counter;
    },
    reset: () => {
      counter = 0;
      return counter;
    },
  };
}

const count = funFactory();

console.log(count.increment()); // 1
console.log(count.increment()); // 2
console.log(count.decrement()); // 1
console.log(count.reset()); // 0
```

**Explanation:**

- `counter` is **private to the factory function**.
- The returned object’s methods form closures that share **the same `counter`**.
- Each method can update or reset `counter`, demonstrating **persistent state via closure**.

---

## ✅ Key Takeaways

1. A **closure** allows a function to access variables from its **outer function** even after it has finished executing.
2. Closures can create **private variables**, **persistent state**, or **function factories**.
3. Closures capture **variables by reference**, including objects.
4. Use closures wisely — they can increase memory usage if large objects are referenced unnecessarily.
5. Common patterns:
   - Counters
   - Event handlers
   - Function factories (currying, multipliers)
