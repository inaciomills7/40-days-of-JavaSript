//Task 1. What will be the output and why?

const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

// output: "Not provided"

//the output is "Not provided" because the nullish coalescing operator (??) checks if the left-hand side (user.age) is null or undefined. Since user.age is explicitly set to undefined, it is considered nullish, and therefore the right-hand side ("Not provided") is returned as the output.

//---

//Task 2. What will happen if we try to modify a frozen object?
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

// output: 1

//When we try to modify a frozen object, it will not allow any changes to be made to the properties of that object. In this case, when we attempt to assign a new value (2) to the property 'a' of the frozen object 'obj', it will not change the value. Therefore, when we log obj.a, it will still output 1, which is the original value assigned to 'a' before freezing the object.

//---

//Task3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

const {
  name,
  company: {
    name: company,
    location: { city },
  },
} = person;
console.log(name); // Output: Tapas
console.log(company); // Output: tapaScript
console.log(city); // Output: Bangalore

//In this code, we use destructuring to extract the 'name' property from the 'person' object, the 'name' property from the nested 'company' object (renamed to 'company'), and the 'city' property from the nested 'location' object. The output will be "Tapas" for name, "tapaScript" for company, and "Bangalore" for city.

//---

//Task  4. Build a Student Management System?
// Store student details in an object (name, age, grades).
// Implement a method to calculate the average grade.

const student = {
  studentName: "John Doe",
  studentID: "12345",
  age: 20,
  grades: {
    math: 85,
    science: 90,
    literature: 78,
  },
  calculateAverageGrade: function () {
    const totalGrades = Object.values(this.grades);
    if (totalGrades.length === 0) return 0; // Handle case when there are no grades

    let sum = 0;
    for (let score of totalGrades) {
      sum += score;
    }
    return sum / totalGrades.length;
  },
};

const { studentName, studentID, age, grades } = student;
console.log(`Student Name: ${studentName}`);
console.log(`Student ID: ${studentID}`);
console.log(`Age: ${age}`);
// Log each subject and its value using Object.entries
Object.entries(grades).forEach(([subject, value]) => {
  console.log(`${subject}: ${value}`);
});

console.log(`Average Grade: ${student.calculateAverageGrade()}`);

//In this code, we define a student object with properties for the student's name, ID, age, and grades. We also implement a method called calculateAverageGrade that calculates the average grade by summing all the grades and dividing by the number of subjects. Finally, we log the student's details and the average grade to the console.

//----

//Task 5. Book Store Inventory System?
//Store books in an object.
//Add functionality to check availability and restock books.

// i am interested in adding a sellBook method to the bookStore object that allows us to sell a specified quantity of a book, ensuring that we have enough stock before completing the sale. This method will also validate the input for the book title and quantity to prevent errors.

const bookStore = {
  inventory: {
    "The Lion King": { author: "Inacio Campos", quantity: 6 },
    "The 7 Mills": { author: "Kiibay", quantity: 6 },
    "The Role Model": { author: "Finix", quantity: 3 },
  },

  checkAvailability: function (title) {
    const book = this.inventory[title];

    if (!book) return "Book not found";
    return book.quantity > 0
      ? `${book.quantity} Book(s) in Stock`
      : `Out of Stock`;
  },

  restockBook: function (title, author, quantity) {
    if (quantity <= 0) {
      console.log("invalid quantity");
      return;
    }

    if (title in this.inventory) {
      this.inventory[title].quantity += quantity;
    } else {
      this.inventory[title] = { author, quantity };
    }

    return `Restocked ${quantity} copy(ies) of "${title}"`;
  },

  sellBook: function (title, quantity) {
    // Validate title first
    if (typeof title !== "string" || title.trim() === "") {
      return "Invalid book title";
    }

    const book = this.inventory[title];

    if (!book) {
      return "Book not found";
    }

    quantity = Number(quantity);
    if (!Number.isFinite(quantity) || quantity <= 0) {
      return "Invalid quantity";
    }

    if (quantity > book.quantity) {
      return `Not enough stock. Remaining: ${book.quantity}`;
    }

    book.quantity -= quantity;

    return `Sold ${quantity} copy(ies) of "${title}"`;
  },
};

console.log(bookStore.checkAvailability("The Great Gatsby")); // false
console.log(bookStore.checkAvailability("The Role Model")); // true
console.log(bookStore.checkAvailability("1984")); // false
console.log(bookStore.restockBook("1984", "klinton", 7)); // Restocked 7 copy(ies) of "1984"
console.log(bookStore.inventory["1984"].quantity); //7
console.log(bookStore.sellBook("1984", 2)); //Sold 2 copy(ies) of "1984"
console.log(bookStore.inventory);

//In this code, we define a bookStore object that contains an inventory of books, each with an author and quantity. The checkAvailability method checks if a book is in stock and returns the quantity available. The restockBook method allows us to add new books or increase the quantity of existing books. The sellBook method allows us to sell a specified quantity of a book, checking for valid input and ensuring that there is enough stock before completing the sale. Finally, we demonstrate the functionality by checking availability, restocking a book, and selling a book.

//---

//task 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

//Object.keys() is a method that returns an array of a given object's own enumerable property names, while Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs. and it will create a nested array. the difference is that Object.keys() only returns the keys of the object, while Object.entries() returns both the keys and their corresponding values in a nested array format.

//practical example of Object.keys() and Object.entries()

const employee = {
  name: "Alice",
  age: 30,
  city: "New York",
};
// Using Object.keys() to get an array of property names
const keys = Object.keys(employee);
console.log(keys); // Output: ["name", "age", "city"]
// Using Object.entries() to get an array of [key, value] pairs
const entries = Object.entries(employee);
console.log(entries); // Output: [["name", "Alice"], ["age", 30], ["city", "New York"]]

//example use Cases
const userr = {
  name: "Kiibay",
  age: 20,
  role: "Student",
};

// Using Object.keys()
Object.keys(userr).forEach((key) => {
  console.log(`Key: ${key}`);
});
// Key: name
// Key: age
// Key: role

// Using Object.entries()
Object.entries(userr).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// name: Kiibay
// age: 20
// role: Student

// Notice how with Object.entries() we can destructure the key and value directly inside the loop — very handy!

//---

//Task 7. How do you check if an object has a certain property?

//you can check if onject.property is not undefined or you can use the in operator or you can use Object.hasOwn() method to check if an object has a certain property.

const obj1 = { name: "Alice", age: 30 };
// Using property access
console.log(obj1.name !== undefined); // true
// Using the in operator
console.log("name" in obj1); // true
// Using Object.hasOwn() method
console.log(Object.hasOwn(obj1, "name")); // true

//8. What will be the output and why?

const person1 = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name); // Output: "Doe"

//The output will be "Doe" because when we assign newPerson = person, we are not creating a new object but rather a reference to the same object in memory. Therefore, when we modify newPerson.name, it also modifies person.name since both variables point to the same object. As a result, when we log person.name, it reflects the change and outputs "Doe".

//---

//Task 9. What’s the best way to deeply copy a nested object? Expalin with examples

//the best way to deeply copy a nested object is to use a javascript method called structuredClone() which creates a deep copy of a given value, including nested objects and arrays. It is a built-in method that provides a simple and efficient way to create a deep copy of complex data structures without the need for external libraries or custom functions.

const original = { name: "Alice", details: { age: 30, city: "New York" } };
const deepCopy1 = structuredClone(original);
deepCopy1.details.age = 25;
console.log(original.details.age); // Output: 30
console.log(deepCopy1.details.age); // Output: 25

//In this example, we have an original object with nested properties. We use structuredClone() to create a deep copy of the original object. When we modify the age property in the deepCopy object, it does not affect the original object, demonstrating that we have successfully created a deep copy. The original object's age remains 30, while the deepCopy's age is updated to 25.

//another example using JSON methods for deep copying:

const original2 = { name: "Bob", details: { age: 25, city: "Los Angeles" } };
const deepCopy2 = JSON.parse(JSON.stringify(original2));
deepCopy2.details.age = 20;
console.log(original2.details.age); // Output: 25
console.log(deepCopy2.details.age); // Output: 20

//anotehr example using a custom recursive function for deep copying:

function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // Return the value if it's not an object
  }
  if (Array.isArray(obj)) {
    return obj.map(deepCopy); // Recursively copy each element in the array
  }

  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]); // Recursively copy each property
    }
  }
  return copy;
}

const original3 = { name: "Charlie", details: { age: 28, city: "Chicago" } };
const deepCopy3 = deepCopy(original3);
deepCopy3.details.age = 22;
console.log(original3.details.age);

//---

//Task 10. Loop and print values using Object destructuiring

const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

// Using for...of loop with destructuring to print values
for (let { name, address, age } of users) {
  console.log("name : ", name);
  console.log("address : ", address);
  console.log("age : ", age);
}

//In this code, we have an array of user objects, each containing properties for name, address, and age. We use a for...of loop to iterate through the users array, and within the loop, we destructure each user object to extract the name, address, and age properties. We then log these values to the console for each user.
