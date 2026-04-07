//Task 1 - 1. Create a table of two columns, situation and value. Now add the rows for every situations and the value of this in that situation. Please cover the following situations
// At the Global
// Inside an Object Method
// Inside the Satandalone non-Arrow Function
// Inside an Arrow Function(standalone)
// Inside an Arrow Function(as object method)
// Inside an object created with the Constructor Function
// Please add examples for each of the scenarios.

// situation | value
// At the golobal | this referes to the global object (window in browsers)
// console.log(this);  In a browser, this will log the Window object, in strict mode, this will be undefined.

console.log("At the global:", this); // In a browser, this will log the Window object

// Inside an Object Method  | value of this referes to the object itself or implicitly bound to the object where the method is called.
const obj = {
  name: "Object Method",
  method: function () {
    console.log("Inside an Object Method:", this); // this will refer to obj
    console.log(this.name); // this will refer to obj.name which is "Object Method"
  },
};

obj.method(); //output: "Inside an Object Method: { name: 'Object Method', method: [Function: method] }" and "Object Method"

//inside the Satandalone non-Arrow Function | value of this referes to the global object (window in browsers) or undefined in strict mode.
function standaloneFunction() {
  console.log("Inside a Standalone non-Arrow Function:", this); // In a browser, this will log the Window object
}
standaloneFunction();
//output: "Inside a Standalone non-Arrow Function: Window {window: Window, self: Window, document: document, name: '', location: Location, …}"

// Inside an Arrow Function(standalone) | value of this is lexically inherited from the surrounding scope, which is the global scope in this case.
const arrowFunction = () => {
  console.log("Inside an Arrow Function(standalone):", this); // this will refer to the global object (window in browsers)
};
arrowFunction();
//output: "Inside an Arrow Function(standalone): Window {window: Window, self: Window, document: document, name: '', location: Location, …}"

// Inside an Arrow Function(as object method) | “Arrow functions do not have their own this; instead, they inherit this from their surrounding (lexical) scope.
// When an arrow function is defined as an object method, the object itself does not create a scope for this because object literals are just bags of key-value pairs, not blocks or functions.
// Therefore, the surrounding scope of the arrow function is the scope where the object is defined — often the global scope. As a result, this inside the arrow function refers to the global object (window in browsers), not the object itself.”

const objWithArrow = {
  name: "Object with Arrow Function",

  arrowMethod: () => {
    console.log("Inside an Arrow Function(as object method):", this); // this will refer to the global object (window in browsers)
    console.log(this.name); // this will be undefined because arrow functions do not have their own this
  },
};

//output: "Inside an Arrow Function(as object method): Window {window: Window, self: Window, document: document, name: '', location: Location, …}" and "undefined"
console.log(objWithArrow.arrowMethod());

// Inside an object created with the Constructor Function | value of this referes to the instance of the object created by the constructor function. why? because when a function is used as a constructor (with the new keyword), JavaScript creates a new object and sets this to point to that new object within the constructor function. This allows the constructor function to initialize properties and methods on the newly created object.
function ConstructorFunction(name) {
  this.name = name;
  console.log("Inside an object created with the Constructor Function:", this); // this will refer to the instance of the object created by the constructor function
  console.log(this.name); // this will refer to the name property of the instance, which is set to the value passed to the constructor
}

const instance = new ConstructorFunction("Constructor Instance");
//output: "Inside an object created with the Constructor Function: ConstructorFunction {name: 'Constructor Instance'}"
//output: "Constructor Instance"

//this in arrow function inside a method of an normal function | value of this is lexically inherited from the surrounding scope, which is the normal function in this case. Since the normal function has its own this that refers to the object, the arrow function will inherit that this and also refer to the object.
const objWithNormalFunction = {
  name: "Object with Normal Function",

  normalMethod: function () {
    const arrowFunctionInsideNormal = () => {
      console.log("Inside an Arrow Function inside a Normal Function:", this); // this will refer to the object because the normal function's this refers to the object and the arrow function inherits that this
      console.log(this.name); // this will refer to the name property of the object, which is "Object with Normal Function"
    };
    arrowFunctionInsideNormal();
  },
};

console.log(objWithNormalFunction.normalMethod());
//output: "Inside an Arrow Function inside a Normal Function: { name: 'Object with Normal Function', normalMethod: [Function: normalMethod] }" and "Object with Normal Function"

//why normal function has this? because when a function is called as a method of an object, JavaScript sets this to refer to the object that the method is called on. This allows the method to access and manipulate the properties of the object using this.
//why normal function has its own this? because normal functions have their own execution context, and when they are called, JavaScript creates a new execution context for that function. In that execution context, this is set based on how the function is called (e.g., as a method of an object, as a standalone function, etc.). This is why normal functions can have their own this that refers to different objects depending on how they are invoked.
//what implicitly bound to the object where the method is called? when a function is called as a method of an object, JavaScript implicitly binds this to the object that the method is called on. This means that within the method, this will refer to that object, allowing the method to access and manipulate the object's properties and methods.

// why in stand alone function and nested function this referes to the global object? because when a function is called as a standalone function (not as a method of an object), JavaScript sets this to refer to the global object (window in browsers) in non-strict mode. In strict mode, this will be undefined. This is because standalone functions do not have an implicit object context, so they default to the global context.

//in summary, the value of this in JavaScript can vary depending on the context in which a function is called. It can refer to the global object, an object method, a standalone function, an arrow function, or an instance created by a constructor function. Understanding how this works is crucial for writing effective JavaScript code.A

//Task 2. What is the problem here? Fix it to log the correct name and explain the fix

const user = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();

// The problem here is that the greet method is defined as an arrow function. Arrow functions do not have their own this; instead, they inherit this from their surrounding (lexical) scope. In this case, the surrounding scope is the global scope, so this inside the greet method refers to the global object (window in browsers), not the user object. As a result, this.name is undefined, and the output will be "Hello, undefined!".

// To fix this, we can change the greet method to a regular function expression, which will have its own this that refers to the user object when called as a method.

const userFixed = {
  name: "tapaScript",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

//or

const userFixed2 = {
  name: "tapaScript",
  greet: function greet() {
    const sayHi = () => {
      console.log(`Hello, ${this.name}!`);
    };
    sayHi();
  },
};

userFixed.greet(); // Output: "Hello, tapaScript!"
userFixed2.greet(); // Output: "Hello, tapaScript!"

//Arrow functions inherit this from their surrounding (lexical) scope, which is the scope in which they are defined. This means that if an arrow function is defined inside another function, it will inherit this from that outer function. If it is defined in the global scope, it will inherit this from the global object (window in browsers). So, arrow functions do not have their own this; they rely on the context of their surrounding scope to determine the value of this.

//Task 3. Can you explain what is the problem here and fix the issue to log the correct name?

const obj2 = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj2.greet;
greetFn();

// The problem here is that when we assign obj.greet to the greetFn variable, we are detaching the function from its original object (obj). As a result, when we call greetFn(), this inside the function will refer to the global object (window in browsers) instead of obj2. Since the global object does not have a name property, this.name will be undefined, and the output will be "Hello, undefined!".

//to solve this issue, we can use the bind method to explicitly bind the greet function to the obj2 object, ensuring that this inside the function refers to obj2 when it is called.

greetFn.call(obj2); // Output: "Hello, Tom!"

//or
const boundGreetFn = greetFn.bind(obj2);
boundGreetFn(); // Output: "Hello, Tom!"

// or just simply call it as a method of the object without detaching it
obj2.greet(); // Output: "Hello, Tom!"

//Task 4. What is the problem with the following code? Why isn't it logging the name correctly?

const user2 = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user2.greet();

//the problem with that code is that the inner function is a regular function, and when it is called, this inside the inner function refers to the global object (window in browsers) instead of the user2 object. Since the global object does not have a name property, this.name will be undefined, and the output will be "Hello, undefined!". even if the greet is a method that is created with a normal function that is implicitly bound to the user2 object, the inner function is not a method of the user2 object, so it does not have access to the user2's this.

// To fix this issue, we can use an arrow function for the inner function, which will inherit this from the greet method, allowing it to access the user2 object.

const user2Fixed = {
  name: "Kiibay",
  greet: function () {
    const inner = () => {
      console.log(`Hello, ${this.name}!`);
    };
    inner();
  },
};
user2Fixed.greet(); // Output: "Hello, Kiibay!"

// Alternatively, we can also use the bind method to explicitly bind the inner function to the user2 object.
const user2Fixed2 = {
  name: "Kiibay",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    const boundInner = inner.bind(this);
    boundInner();
  },
};
user2Fixed2.greet(); // Output: "Hello, Kiibay!"

// In summary, the issue arises because the inner function does not have access to the user2 object's this, and we can fix it by using an arrow function or by explicitly binding the inner function to the user2 object.

//Task 5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details

function Sports(name, numberOfPlayers) {
  this.name = name;
  this.numberOfPlayers = numberOfPlayers;
}

const soccer = new Sports("Soccer", 11);
const basketball = new Sports("Basketball", 5);
console.log(soccer); // Output: Sports { name: 'Soccer', numberOfPlayers: 11 }
console.log(basketball); // Output: Sports { name: 'Basketball', numberOfPlayers: 5 }

//and we can also log the details in a more readable format:
console.log(
  `Sport: ${soccer.name}, Number of Players: ${soccer.numberOfPlayers}`,
);
console.log(
  `Sport: ${basketball.name}, Number of Players: ${basketball.numberOfPlayers}`,
);

//we can also add a method to the Sports constructor function to log the details of the sport:
function Sports(name, numberOfPlayers) {
  this.name = name;
  this.numberOfPlayers = numberOfPlayers;
  this.getDetails = function () {
    console.log(
      `Sport: ${this.name}, Number of Players: ${this.numberOfPlayers}`,
    );
  };
}
const soccer2 = new Sports("Soccer", 11);
const basketball2 = new Sports("Basketball", 5);
soccer2.getDetails(); // Output: "Sport: Soccer, Number of Players: 11"
basketball2.getDetails(); // Output: "Sport: Basketball, Number of Players: 5"

//in summary, the Sports constructor function allows us to create instances of sports with specific properties (name and number of players) and we can also add methods to the constructor function to provide additional functionality, such as logging the details of the sport.

//Task 6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of

const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

//the possible solutions to attach car1's describe() method to car2 object are:

//1. Using call method
car1.describe.call(car2); // Output: "This car is a BMW X1."
//2. Using apply method
car1.describe.apply(car2); // Output: "This car is a BMW X1."
//3. Using bind method
const describeCar2 = car1.describe.bind(car2);
describeCar2(); // Output: "This car is a BMW X1."
//4. Directly assigning the method to car2
car2.describe = car1.describe;
car2.describe(); // Output: "This car is a BMW X1."
//5. Using Object.assign to copy the method from car1 to car2
Object.assign(car2, { describe: car1.describe });
car2.describe(); // Output: "This car is a BMW X1."
//6. Using a function to copy the method from car1 to car2
function copyDescribeMethod(source, target) {
  target.describe = source.describe;
}
copyDescribeMethod(car1, car2);
car2.describe(); // Output: "This car is a BMW X1."

// In summary, there are multiple ways to attach car1's describe() method to car2 object, including using call, apply, bind, direct assignment, Object.assign, or a custom function to copy the method. Each of these methods allows us to ensure that when we call describe on car2, it correctly references car2's properties.

//Task 7. What will be the output of the following code and why?
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();

// A: "Charlie" and "Charlie"
// B: "Charlie" and undefined
// C: "Charlie" and "" (empty string)
// D: undefined and "Charlie"

// The correct answer is B: "Charlie" and undefined.

// Explanation:
// The sayHello method is a regular function, and when it is called as a method of the person object, this inside the function refers to the person object. Therefore, this.name will correctly access the name property of the person object, resulting in "Charlie". why the function because it implicitly bound to the person object when called as a method. javascript automatically sets this to refer to the object that the method is called on, which is person in this case.

// The sayHelloArrow method is an arrow function, and arrow functions do not have their own this context. Instead, they inherit this from the enclosing scope, which in this case is the global object (or undefined in strict mode). Therefore, this.name will be undefined. why it inherited from the global scope? because arrow functions do not have their own this, they rely on the context of their surrounding scope to determine the value of this. In this case, since sayHelloArrow is defined in the global scope, it inherits this from the global object, which does not have a name property, resulting in undefined. how do we know it defined in global scope? because it is defined directly within the person object, and not inside any function or block that would create a new scope. Therefore, the surrounding scope of the arrow function is the global scope.
