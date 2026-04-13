//Task 1. What will be the output of the following code?
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name);
}

//Output : Reference Error because p is not defined

//Task 2. Write a function processPayment(amount) that checks if
//the amount is positive and not exceeding balance. If any condition
//fails, throw appropriate errors

function processPayment(amount) {
  let balance = 1000;

  try {
    if (amount <= 0) {
      throw new Error("Invalid payment amount!");
    }

    if (amount > balance) {
      throw new Error("Not enough fund, lower you amount!");
    }

    //if we reach here we are successfully
    console.log("payment successful!");
  } catch (error) {
    console.error("An error has occur : ", error);
  }
}

processPayment(-1);
processPayment(1200);
processPayment(500);

//Task 3. Implement a custom error handling system for an e-commerce website that categorizes errors as

//User Error
function UserError(message) {
  this.name = "UserError";
  this.message = message || "invalid user";
  this.stack = new Error().stack;
}

UserError.prototype = Object.create(Error.prototype);
UserError.prototype.constructor = UserError;

function validateUserInput(input) {
  if (typeof input !== "string" || input.trim() === "") {
    throw new UserError("Input must be non-empty string");
  }

  console.log("User input is valid", input);
}

//payment Error
function PaymentError(message) {
  this.name = "PaymentError";
  this.message = message || "Payment error!";
  this.stack = new Error().stack;
}

PaymentError.prototype = Object.create(Error.prototype);
PaymentError.prototype.constructor = PaymentError;

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

// ServerError
function ServerError(message) {
  this.name = "ServerError";
  this.message = message || "Server Error!";
  this.stack = new Error().stack;
}

ServerError.prototype = Object.create(Error.prototype);
ServerError.prototype.constructor = ServerError;

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

//Email Error
function EmailError(message) {
  this.name = "EmailError";
  this.message = message || "Invalid email";
  this.stack = new Error().stack;
}

EmailError.prototype = Object.create(Error.prototype);
EmailError.prototype.constructor = EmailError;

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

function errorValidation(fn) {
  try {
    fn();
  } catch (error) {
    if (error instanceof UserError) {
      console.error(`User Error Ocurred: ${error.message}`);
    } else if (error instanceof PaymentError) {
      console.error(`Payment Error Occured: ${error.message}`);
    } else if (error instanceof ServerError) {
      console.error(`Server Error Occured: ${error.message}`);
    } else if (error instanceof EmailError) {
      console.error(`Email Error Occured: ${error.message}`);
    } else {
      console.error(`Unexpected Error: ${error.message}`);
    }
  }
}

errorValidation(() => validateUserInput(""));
errorValidation(() => validatePaymentInput("100"));
errorValidation(() => validateEmailInput("ianfddfdo"));
errorValidation(() => simulateServerError(""));

//4. Simulate an API call function fetchData(url).
//If the URL does not start with "https", throw an "Invalid URL" error.
//Handle it using try...catch

function fetchData3(url) {
  if (typeof url !== "string" || !url.startsWith("https://")) {
    throw new Error("Invalid Url: must start with https://");
  }
  console.log("fetching data from: ", url);
}

function handleRequest(fn) {
  try {
    fn();
  } catch (error) {
    console.error("Request failed: ", error.message);
  }
}

handleRequest(() => fetchData3("http://googole.com"));
handleRequest(() => fetchData3("https://google.com"));

//--

// 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors
// Example:

const userInput = { username: "", age: -2 };

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number

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

try {
  validateUser(userInput);
} catch (error) {
  if (error instanceof ValidationError) {
    error.errors.forEach((msg) => {
      console.error(`${error.name}: ${msg}`);
    });
  } else {
    console.error("Unexpected error: ", error.message);
  }
}

//---

// 6. Write a function readFile(filePath) that simulates reading a file.
// If the file does not exist (simulate with a condition), throw a "File not found" error.
// Handle the error with try...catch. Make sure you have code to handle releasing the IO resources

const files = ["data.txt", "notes.txt", "report.pdf"]; //simulate file system
function readFile(filePath) {
  let handleFile = null;
  try {
    if (!files.includes(filePath)) {
      throw new Error("File not found!");
    }
    //simulation open file
    console.log("opening file....");
    handleFile = { path: filePath };
    //simulation reading file
    console.log("Reading file: ", filePath);
  } catch (error) {
    console.error(error.message);
  } finally {
    if (handleFile) {
      //simulation closing file
      console.log("closing file...");
      handleFile = null;
    }
  }
}

readFile("data.txt"); // works
readFile("unknown.txt"); // ❌ error

//---

// Task 7. Write a function parseJson(str)
// that takes a JSON string and tries to parse it using JSON.parse().
// If parsing fails, catch the error and return "Invalid JSON"

function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.error("Parsing failed... ", error.message);
    return "Invalid JSON";
  }
}

console.log(parseJson('{"name":"Kiibay","age":77}')); //works
console.log(parseJson(""));

// JSON.parse() already:
// throws an error if invalid
// returns parsed value if valid

//Task 8. What is the purpose of throw in JavaScript?

//answer:
//it creates a new error manually

//Task 9. What does the finally block do in a try...catch statement?
//answer:
//Runs regardless of whether an error occurs or not

//Task 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object

//try: throw is used to manually trigger an error, allowing you to stop execution and pass control to a catch block.
//catch: catch the error the happenden in try
//finally: finally always executes after try...catch, whether an error occurs or not, and is typically used for cleanup (e.g., closing resources).
//thow: manually create an error
//rethow : throw again the error from the catch so that the other function can catch it
//error: error in the instance or constructor function Error
