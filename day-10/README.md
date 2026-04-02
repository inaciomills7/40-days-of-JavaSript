# Day 10 – JavaScript Scope, Hoisting, Lexical Scope, and Function Execution

Welcome to **Day 10** of the 40-day JavaScript challenge!  
Today, we focused on **how variables behave in different scopes, how hoisting works, the Temporal Dead Zone (TDZ), shadowing, nested functions, and the behavior of functions returned from other functions**.

---

## **Task 1 – TDZ and Shadowing**

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

**Output:**

```
ReferenceError
```

### Step-by-Step Explanation:

1. `let user = "Alice"` is declared in the **global scope**.
2. `outer()` is called.
3. Inside `outer()`, there is a nested function `inner()` and a variable `let user = "Bob"`.
4. `let user = "Bob"` is **hoisted** but **uninitialized** at the start of `outer()` → this period is called the **Temporal Dead Zone (TDZ)**.
5. When `inner()` executes, it looks for `user`:
   - First inside `inner()` → none
   - Then in `outer()` → `user` exists but still in **TDZ**
   - Accessing it now triggers a **ReferenceError**

6. The global `user = "Alice"` is **shadowed** by the `user` in `outer()`.

**Key Learning:**

- `let`/`const` variables are hoisted but cannot be accessed before initialization (TDZ).
- Variables with the same name in an outer scope are **shadowed** by inner declarations.

---

## **Task 2 – Global Variable Pitfall**

```js
let total = 0;

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);
```

**Output:**

```
15
```

### Step-by-Step Explanation:

1. `total` is declared in the **global scope** → accessible anywhere.
2. `add(5)` executes → `total` becomes `0 + 5 = 5`.
3. `add(10)` executes → `total` becomes `5 + 10 = 15`.
4. `console.log(total)` prints `15`.

**Problem:**

- `total` is **mutable in the global scope** → can be accidentally modified anywhere.
- This is considered **bad practice**.

**Better Approaches:**

1. **Return values from functions**:

```js
function add(total, num) {
  return total + num;
}
let total = 0;
total = add(total, 5);
total = add(total, 10);
```

2. **Encapsulate state inside a function** (keeps it private):

```js
function createAdder() {
  let total = 0;
  return function (num) {
    total += num;
    return total;
  };
}
const add = createAdder();
```

**Key Learning:**

- Avoid global variables for mutable state.
- Encapsulation ensures safer code.

---

## **Task 3 – Nested Function Accessing Parent Variable**

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

**Output:**

```
Kiibay
```

### Step-by-Step Explanation:

1. `sayHi()` is called.
2. Inside `sayHi()`, `name = "Kiibay"` is declared.
3. `inner()` is defined **inside `sayHi()`**, so it can access variables from its **lexical scope**.
4. `inner()` executes → finds `name = "Kiibay"` in `sayHi()` → prints it.
5. `name` is **not accessible outside `sayHi()`**.

**Key Learning:**

- Inner functions can access **variables from their parent function scope**.
- This demonstrates **lexical scoping**.

---

## **Task 4 – Variable Scope Inside Loops**

```js
function loop() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  console.log(i);
}

loop();
```

**Output:**

```
1
2
3
4
5
ReferenceError
```

### Step-by-Step Explanation:

1. `for (let i = 1; i <= 5; i++)` creates a **block-scoped** variable `i`.
2. Inside the loop, `console.log(i)` prints `1, 2, 3, 4, 5`.
3. After the loop, `console.log(i)` is outside the block → **ReferenceError** because `let i` is **not accessible outside the loop**.
4. If `i` was declared with `var`, it would be **function-scoped**, so it would exist after the loop.

**Key Learning:**

- `let`/`const` → **block-scoped**
- `var` → **function-scoped**
- Understand **scope boundaries** to avoid errors.

---

## **Task 5 – Function Scope (Age Example)**

```js
function showAge() {
  let age = 25;
  console.log(age);
}

console.log(age);
```

**Output:**

```
ReferenceError
```

### Step-by-Step Explanation:

1. `age` is declared **inside `showAge()`** → only exists **inside the function**.
2. `console.log(age)` outside the function → JS cannot find `age` → ReferenceError.

**Key Learning:**

- Variables declared inside a function are **not accessible outside**.
- Understanding function scope is crucial for managing variables.

---

## **Task 6 – Hoisting and TDZ with `let`**

```js
console.log(a);
let a = 10;
```

**Output:**

```
ReferenceError
```

### Step-by-Step Explanation:

1. `let a` is **hoisted** → memory space is reserved.
2. Variable `a` is **uninitialized** until `let a = 10` executes → TDZ applies.
3. `console.log(a)` before initialization → **ReferenceError**.

**Contrast with `var`:**

```js
console.log(b); // undefined
var b = 10;
```

**Key Learning:**

- `var` → hoisted and initialized with `undefined`
- `let`/`const` → hoisted but **uninitialized** → TDZ

---

## **Task 7 – Function Scope Accessibility**

```js
function showAge() {
  let age = 25;
  console.log(age);
}

console.log(age);
```

**Output:**

```
ReferenceError
```

### Step-by-Step Explanation:

1. `age` exists only inside `showAge()`.
2. Accessing `age` outside → ReferenceError.
3. Reinforces **function scope rules**.

---

## **Task 8 – Lexical Scope and Shadowing**

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

**Output:**

```
Hi
```

### Step-by-Step Explanation:

1. Global `message = "Hello"` exists.
2. `outer()` defines `message = "Hi"` → **shadows global `message`**.
3. `inner()` is lexically scoped inside `outer()` → accesses `message` in `outer()` → prints `"Hi"`.
4. If `inner()` was called **before `let message = "Hi"`**, TDZ → ReferenceError.

**Key Learning:**

- Lexical scoping determines **which variable an inner function sees**.
- Shadowing occurs when **inner variable hides outer variables**.

---

## **Task 9 – Nested Shadowing with Multiple Levels**

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

**Output:**

```
Inner
```

### Step-by-Step Explanation:

1. `x = "Global"` in global scope.
2. `x = "Outer"` inside `outer()` → shadows global `x`.
3. `x = "Inner"` inside `inner()` → shadows `outer` and global `x`.
4. `console.log(x)` in `inner()` → prints `"Inner"`.
5. TDZ applies if `console.log(x)` is before `let x = "Inner"`.

**Key Learning:**

- Inner-most variable **always takes precedence** → shadowing rules.
- Lexical scope + TDZ control **accessibility**.

---

## **Task 10 – Function Returning Function (Remembering Outer Variable)**

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

**Output:**

```
-1
-2
```

### Step-by-Step Explanation:

1. `counter()` declares `count = 0` inside its scope.
2. `counter()` **returns a function** that:
   - Decrements `count`
   - Logs its value

3. `reduce = counter()` → now `reduce` **holds the returned function**.
4. **First call `reduce()`**:
   - `count` starts at 0
   - `count--` → -1
   - Logs -1

5. **Second call `reduce()`**:
   - `count` is now -1
   - `count--` → -2
   - Logs -2

6. **Why `count` is remembered**:
   - The returned function is defined **inside `counter()`** → it can access `count` from the environment where it was created.
   - Even though `counter()` finished execution, the function **remembers** its parent variables.

**Key Learning:**

- Functions can access variables from where they were **defined**, even after the parent function finishes.
- Step-by-step reasoning is crucial for understanding this concept before learning the formal term **closure**.

---

## ✅ **Day 10 Summary / Key Concepts**

1. **Lexical Scope** – Functions access variables where they were **defined**, not called.
2. **Shadowing** – Inner variables hide outer variables with the same name.
3. **Hoisting & TDZ**:
   - `var` → hoisted + initialized with `undefined`
   - `let` / `const` → hoisted + uninitialized → TDZ → ReferenceError if accessed early

4. **Function Scope** – Variables declared inside functions are not accessible outside.
5. **Block Scope** – `let`/`const` are block-scoped (loops, conditionals).
6. **Functions Remember Parent Variables** – Returned functions can access parent variables (prelude to closures).
