# 📘 Day 14 — Deep Dive into JavaScript Error Handling

## 🎯 Learning Goals

By the end of this day, you should understand:

- How JavaScript handles runtime errors
- The full lifecycle of `try → catch → finally`
- When and why to use `throw`
- How to design **custom error systems**
- How to structure **real-world safe functions**

---

# 🧠 1. How JavaScript Handles Errors

JavaScript stops execution when a runtime error occurs.

Example:

```js
let x = y + 10; // ❌ y is not defined
```

👉 Without error handling → program crashes
👉 With `try...catch` → program continues safely

---

# 🧩 Task 1 — Understanding try...catch

## ✅ Code

```js
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name);
}
```

## 📤 Output

```
An error occurred: ReferenceError
```

## 🔍 Deep Explanation

- `p` is not defined → JavaScript throws a **ReferenceError**
- Execution jumps immediately to `catch`
- `error` object contains:
  - `name` → type of error (`ReferenceError`)
  - `message` → detailed message
  - `stack` → where it happened

👉 Important:

> Code inside `try` stops executing as soon as an error occurs.

---

# 🧩 Task 2 — processPayment()

## 🎯 Goal

Validate:

- amount must be positive
- amount must not exceed balance

---

## ✅ Code

```js
function processPayment(amount) {
  let balance = 1000;

  try {
    if (amount <= 0) {
      throw new Error("Invalid payment amount!");
    }

    if (amount > balance) {
      throw new Error("Not enough fund, lower your amount!");
    }

    console.log("Payment successful!");
  } catch (error) {
    console.error("An error has occurred:", error.message);
  }
}

// 🧪 Tests
processPayment(-1);
processPayment(1200);
processPayment(500);
```

## 📤 Output

```
An error has occurred: Invalid payment amount!
An error has occurred: Not enough fund, lower your amount!
Payment successful!
```

## 🔍 Deep Explanation

### 🔹 `throw new Error(...)`

- Stops execution immediately
- Sends control to `catch`

### 🔹 Why validation matters

Without validation:

- Users could pay negative values
- System could break financially

### ⚠️ Design Insight

This function **handles errors internally**, which is okay for small apps.

👉 In larger apps:

- You usually **throw errors here**
- And **handle them outside**

---

# 🧩 Task 3 — Custom Error System (Advanced Concept)

## 🎯 Goal

Categorize errors into:

- UserError
- PaymentError
- ServerError
- EmailError

---

## 🧠 Why Custom Errors?

Instead of:

```js
throw new Error("Something went wrong");
```

We use:

```js
throw new PaymentError("Insufficient funds");
```

👉 This makes debugging and handling **much easier**

---

## ✅ Custom Error Example

### UserError

```js
function UserError(message) {
  this.name = "UserError";
  this.message = message || "Invalid user";
  this.stack = new Error().stack;
}

UserError.prototype = Object.create(Error.prototype);
UserError.prototype.constructor = UserError;
```

---

## 🧪 Validation Functions

```js
function validateUserInput(input) {
  if (typeof input !== "string" || input.trim() === "") {
    throw new UserError("Input must be non-empty string");
  }
  console.log("User input is valid:", input);
}
```

### PaymentError

```js
function PaymentError(message) {
  this.name = "PaymentError";
  this.message = message || "Payment error!";
  this.stack = new Error().stack;
}

PaymentError.prototype = Object.create(Error.prototype);
PaymentError.prototype.constructor = PaymentError;
```

---

## 🧪 Validation Functions

```js
function validatePaymentInput(amount) {
  const balance = 1000;
  if (typeof amount !== "number" || amount <= 0) {
    throw new PaymentError(`the amount must be a positive number`);
  }

  if (amount > balance) {
    throw new PaymentError(`Insufficient funds`);
  }

  //if we reach here payment successfuly
  console.log("payment successful!");
}
```

### ServerError

```js
function ServerError(message) {
  this.name = "ServerError";
  this.message = message || "Server Error!";
  this.stack = new Error().stack;
}

ServerError.prototype = Object.create(Error.prototype);
ServerError.prototype.constructor = ServerError;
```

---

## 🧪 Validation Functions

```js
function simulateServerError(request) {
  if (!request) {
    throw new ServerError("No request provided.");
  }
  if (request === "timeout") {
    throw new ServerError("Request timed out.");
  }
  if (request === "connection") {
    // Simulate successful server response
    console.log("Server responded successfully.");
    return;
  }

  throw new ServerError("Unable to connect to the server.");
}
```

### EmailError

```js
function EmailError(message) {
  this.name = "EmailError";
  this.message = message || "Invalid email";
  this.stack = new Error().stack;
}

EmailError.prototype = Object.create(Error.prototype);
EmailError.prototype.constructor = EmailError;
```

---

## 🧪 Validation Functions

```js
function validateEmailInput(email) {
  if (
    !email ||
    typeof email !== "string" ||
    !email.includes("@") ||
    email.startsWith("@") ||
    email.endsWith("@")
  ) {
    throw new EmailError("Invalid email format");
  }

  console.log("Valid email: ", email);
}
```

---

## 🧪 Central Handler

```js
function errorValidation(fn) {
  try {
    fn();
  } catch (error) {
    if (error instanceof UserError) {
      console.error(`User Error Occurred: ${error.message}`);
    } else if (error instanceof PaymentError) {
      console.error(`Payment Error Occurred: ${error.message}`);
    } else if (error instanceof ServerError) {
      console.error(`Server Error Occurred: ${error.message}`);
    } else if (error instanceof EmailError) {
      console.error(`Email Error Occurred: ${error.message}`);
    } else {
      console.error(`Unexpected Error: ${error.message}`);
    }
  }
}
```

---

## 🧪 Tests

```js
errorValidation(() => validateUserInput(""));
errorValidation(() => validatePaymentInput("100"));
errorValidation(() => validateEmailInput("ianfddfdo"));
errorValidation(() => simulateServerError(""));
```

## 📤 Output

```
User Error Occurred: Input must be non-empty string
Payment Error Occurred: the amount must be a positive number
Email Error Occurred: Invalid email format
Server Error Occurred: No request provided.
```

---

## 🔍 Deep Explanation

### 🔹 `instanceof`

Checks the type of error:

```js
error instanceof UserError;
```

👉 This is how we **categorize errors**

---

# 🧩 Task 4 — API Simulation

## ✅ Code

```js
function fetchData3(url) {
  if (typeof url !== "string" || !url.startsWith("https://")) {
    throw new Error("Invalid Url: must start with https://");
  }
  console.log("fetching data from:", url);
}

function handleRequest(fn) {
  try {
    fn();
  } catch (error) {
    console.error("Request failed:", error.message);
  }
}

// 🧪 Tests
handleRequest(() => fetchData3("http://googole.com"));
handleRequest(() => fetchData3("https://googole.com"));
```

## 📤 Output

```
Request failed: Invalid Url: must start with https://
fetching data from: https://googole.com
```

---

## 🔍 Insight

👉 Always validate external input (URLs, API data)

---

# 🧩 Task 5 — ValidationError (Multiple Errors)

## ✅ Code

```js
function ValidationError(message) {
  this.name = "ValidationError";
  this.message = "Validation failed";
  this.errors =
    Array.isArray(message) && message.length
      ? message
      : ["Unknown Validation Error"];
  this.stack = new Error().stack;
}

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

function validateUser(user) {
  const errors = [];
  if (typeof user.username !== "string" || user.username.trim() === "") {
    errors.push("Username cannot be empty");
  }

  if (
    typeof user.age !== "number" ||
    !Number.isInteger(user.age) ||
    user.age <= 0
  ) {
    errors.push("Age must be a positive number");
  }

  if (errors.length > 0) {
    throw new ValidationError(errors);
  }

  //if we reach here user validation successfully
  console.log("valid user: ", user);
}
```

---

## 🧪 Test

```js
const userInput = { username: "", age: -2 };

try {
  validateUser(userInput);
} catch (error) {
  if (error instanceof ValidationError) {
    error.errors.forEach((msg) => {
      console.error(`${error.name}: ${msg}`);
    });
  }
}
```

## 📤 Output

```
ValidationError: Username cannot be empty
ValidationError: Age must be a positive number
```

---

## 🔍 Insight

👉 This pattern is used in:

- Forms
- APIs
- Backend validation

---

# 🧩 Task 6 — File Handling Simulation

## ✅ Code

```js
function readFile(filePath) {
  let handleFile = null;

  try {
    if (!files.includes(filePath)) {
      throw new Error("File not found!");
    }

    console.log("opening file....");
    handleFile = { path: filePath };

    console.log("Reading file:", filePath);
  } catch (error) {
    console.error(error.message);
  } finally {
    if (handleFile) {
      console.log("closing file...");
      handleFile = null;
    }
  }
}

// 🧪 Tests
readFile("data.txt");
readFile("unknown.txt");
```

## 📤 Output

```
opening file....
Reading file: data.txt
closing file...

File not found!
```

---

## 🔍 Deep Insight

👉 `finally` ensures cleanup happens:

- even if error occurs
- even if return happens

---

# 🧩 Task 7 — JSON Parsing

## ✅ Code

```js
function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.error("Parsing failed...", error.message);
    return "Invalid JSON";
  }
}

// 🧪 Tests
console.log(parseJson('{"name":"Kiibay","age":77}'));
console.log(parseJson(""));
```

## 📤 Output

```
{ name: "Kiibay", age: 77 }
Parsing failed... Unexpected end of JSON input
Invalid JSON
```

---

# 📚 Theory Section

## 🔹 `throw` (task 8)

Manually creates an error and stops execution

## 🔹 `catch`

Handles errors from `try`

## 🔹 `finally` (Task 9)

Always runs → used for cleanup

---

# Task 10 — Error Handling in JavaScript

## 📊 Table: try, catch, throw, rethrow, finally, Error Object, instanceof

| Concept        | Description                                                           | When to Use                                                         | Example                                                        |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------- |
| `try`          | Defines a block of code to test for errors                            | When you want to safely execute code that might fail                | `js try { JSON.parse(data); } `                                |
| `catch`        | Handles errors thrown in the `try` block                              | When you want to prevent program crash and handle errors gracefully | `js catch (err) { console.log(err.message); } `                |
| `throw`        | Manually creates and throws an error                                  | When you want to enforce rules or validate data                     | `js if (!user) throw new Error("User not found"); `            |
| `rethrow`      | Throws the error again after catching it                              | When you want to handle partially, then pass error up               | `js catch (err) { if (err instanceof TypeError) throw err; } ` |
| `finally`      | Runs code after `try` and `catch`, regardless of success or failure   | For cleanup tasks (closing resources, logging, etc.)                | `js finally { console.log("Done"); } `                         |
| `Error Object` | Built-in object containing error details (`name`, `message`, `stack`) | When you need structured error info                                 | `js const err = new Error("Something went wrong"); `           |
| `instanceof`   | Checks the type of an error (or object)                               | When handling different types of errors differently                 | `js if (err instanceof SyntaxError) { ... } `                  |

---

## 🧠 Full Example (All Concepts Together)

```js
function parseJson(str) {
  try {
    const result = JSON.parse(str);

    if (!result.name) {
      throw new Error("Missing 'name' property"); // throw
    }

    return result;
  } catch (err) {
    console.log("Caught error:", err.message);

    // rethrow example
    if (err instanceof SyntaxError) {
      throw err;
    }

    return "Handled error";
  } finally {
    console.log("Execution finished (success or error)");
  }
}

// ✅ Test Cases

// Valid JSON
console.log(parseJson('{"name":"Arnol"}'));

// Invalid JSON
try {
  parseJson("invalid json");
} catch (e) {
  console.log("Rethrown:", e.message);
}

// Missing property
console.log(parseJson("{}"));
```

---

## ✅ Expected Output

```
Execution finished (success or error)
{ name: 'Arnol' }

Caught error: Unexpected token i in JSON
Execution finished (success or error)
Rethrown: Unexpected token i in JSON

Caught error: Missing 'name' property
Execution finished (success or error)
Handled error
```

---

## 🔍 Key Takeaways

- `try` → runs risky code
- `catch` → handles errors
- `throw` → creates custom errors
- `rethrow` → passes error upward
- `finally` → always runs (cleanup)
- `Error object` → gives details (`message`, `stack`)
- `instanceof` → identifies error type

---

# 🚀 Final Takeaways

- Errors are **normal**, not bad
- Good developers **control errors**
- Custom errors = scalable systems
- Validation is critical in real apps
- `finally` is important for resource management

---

# 🏁 Conclusion

This day introduces one of the most important real-world skills:

👉 **Writing safe, predictable, and maintainable JavaScript code**
