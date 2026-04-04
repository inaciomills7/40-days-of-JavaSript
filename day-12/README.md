````markdown
# Day 12 – JavaScript Object Manipulation and Problem Solving

Welcome to **Day 12** of the 40-day JavaScript challenge!  
Today, we focused on **working with objects, destructuring, object methods, validation, and dynamic handling of data**.

Below is a summary of **10 tasks** completed with explanations and examples.

---

## **Task 1 – What will be the output and why?**

**Problem:** Check if a property is defined; if not, provide a default value.

```js
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided"); // Output: "Not provided"
```
````

**Explanation:**
The `??` operator returns the right-hand side only if the left-hand side is `null` or `undefined`. Since `user.age` is `undefined`, it returns `"Not provided"`.

---

## **Task 2. What will happen if we try to modify a frozen object?**

```js
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a); // Output: 1
```

**Explanation:**
`Object.freeze()` prevents modification of object properties. Any attempts to change the object fail silently (or throw in strict mode).
When we try to modify a frozen object, it will not allow any changes to be made to the properties of that object. In this case, when we attempt to assign a new value (2) to the property 'a' of the frozen object 'obj', it will not change the value. Therefore, when we log obj.a, it will still output 1, which is the original value assigned to 'a' before freezing the object.

---

## **Task3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring**

```js
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: { city: "Bangalore", zip: "94107" },
  },
};

const {
  name,
  company: {
    name: company,
    location: { city },
  },
} = person;

console.log(name); // Tapas
console.log(company); // tapaScript
console.log(city); // Bangalore
```

**Explanation:**
In this code, we use destructuring to extract the 'name' property from the 'person' object, the 'name' property from the nested 'company' object (renamed to 'company'), and the 'city' property from the nested 'location' object. The output will be "Tapas" for name, "tapaScript" for company, and "Bangalore" for city.

---

## **Task 4 – Student Management System (Static Subjects)**

- Store student details in an object (name, age, grades).
- Implement a method to calculate the average grade.

```js
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
console.log(`Student Name: ${studentName}`); //Student Name: John Doe
console.log(`Student ID: ${studentID}`); //Student ID: 12345
console.log(`Age: ${age}`); //Age: 20
// Log each subject and its value using Object.entries
Object.entries(grades).forEach(([subject, value]) => {
  console.log(`${subject}: ${value}`);
}); // Output: math: 85, science: 90, literature: 78

console.log(`Average Grade: ${student.calculateAverageGrade()}`); // Output: Average Grade: 84.33333333333333
```

**Explanation:**

In this code, we define a student object with properties for the student's name, ID, age, and grades. We also implement a method called `calculateAverageGrade()` that calculates the average grade by summing all the grades and dividing by the number of subjects. Finally, we log the student's details and the average grade to the console.

---

## **Task 5 – Bookstore Inventory System**

- Store books in an object.
- Add functionality to check availability and restock books.

- i am interested in adding a sellBook method to the bookStore object that allows us to sell a specified quantity of a book, ensuring that we have enough stock before completing the sale. This method will also validate the input for the book title and quantity to prevent errors.

```js
const bookStore = {
  inventory: {
    "The Lion King": { author: "Inacio Campos", quantity: 6 },
    "The 7 Mills": { author: "Kiibay", quantity: 6 },
    "The Role Model": { author: "Finix", quantity: 3 },
  },

  checkAvailability(title) {
    const book = this.inventory[title];
    if (!book) return "Book not found";
    return book.quantity > 0
      ? `${book.quantity} Book(s) in Stock`
      : "Out of Stock";
  },

  restockBook(title, author, quantity) {
    if (quantity <= 0) return console.log("Invalid quantity");
    if (title in this.inventory) this.inventory[title].quantity += quantity;
    else this.inventory[title] = { author, quantity };
  },

  sellBook(title, quantity) {
    if (typeof title !== "string" || title.trim() === "")
      return "Invalid book title";

    const book = this.inventory[title];
    if (!book) return "Book not found";

    quantity = Number(quantity);
    if (!Number.isFinite(quantity) || quantity <= 0) return "Invalid quantity";
    if (quantity > book.quantity)
      return `Not enough stock. Remaining: ${book.quantity}`;

    book.quantity -= quantity;
    return `Sold ${quantity} copy(ies) of "${title}"`;
  },
};
```

**Explanation:**

//In this code, we define a bookStore object that contains an inventory of books, each with an author and quantity. The checkAvailability method checks if a book is in stock and returns the quantity available. The restockBook method allows us to add new books or increase the quantity of existing books. The sellBook method allows us to sell a specified quantity of a book, checking for valid input and ensuring that there is enough stock before completing the sale. Finally, we demonstrate the functionality by checking availability, restocking a book, and selling a book.

---

## **task 6. What is the difference between `Object.keys()` and `Object.entries()`? Explain with examples**

```js
const employee = { name: "Alice", age: 30, city: "New York" };

console.log(Object.keys(employee)); // ["name", "age", "city"]
console.log(Object.entries(employee)); // [["name", "Alice"], ["age", 30], ["city", "New York"]]
```

**Explanation:**

- `Object.keys()` → returns array of property names.
- `Object.entries()` → returns nested array of `[key, value]` pairs.

---

## **Task 7. How do you check if an object has a certain property?**

```js
const obj1 = { name: "Alice", age: 30 };

console.log(obj1.name !== undefined); // true
console.log("name" in obj1); // true
console.log(Object.hasOwn(obj1, "name")); // true
```

**Explanation:**
you can check if onject.property is not undefined or you can use the in operator or you can use Object.hasOwn() method to check if an object has a certain property.

---

## **Task 8 – Object References**

```js
const person1 = { name: "John" };
const newPerson = person1;
newPerson.name = "Doe";

console.log(person1.name); // "Doe"
```

**Explanation:**
The output will be "Doe" because when we assign newPerson = person, we are not creating a new object but rather a **reference** to the same object in memory. Therefore, when we modify newPerson.name, it also modifies person.name since both variables point to the same object. As a result, when we log person.name, it reflects the change and outputs "Doe".

---

## **Task 9 – Deep Copy of Nested Objects**

```js
const original = { name: "Alice", details: { age: 30, city: "New York" } };
const deepCopy = structuredClone(original);
deepCopy.details.age = 25;

console.log(original.details.age); // 30
console.log(deepCopy.details.age); // 25
```

**Explanation:**
the best way to deeply copy a nested object is to use a javascript method called `structuredClone()` which creates a deep copy of a given value, including nested objects and arrays. It is a built-in method that provides a simple and efficient way to create a deep copy of complex data structures without the need for external libraries or custom functions.

---

## **Task 10 – Looping and Printing Values Using Object Destructuring**

```js
const users = [
  { name: "Alex", address: "15th Park Avenue", age: 43 },
  { name: "Bob", address: "Canada", age: 53 },
  { name: "Carl", address: "Bangalore", age: 26 },
];

for (let { name, address, age } of users) {
  console.log("name:", name);
  console.log("address:", address);
  console.log("age:", age);
}
```

**Explanation:**
Used **for...of loop with destructuring** to dynamically extract properties from objects in an array. In this code, we have an array of user objects, each containing properties for name, address, and age. We use a for...of loop to iterate through the users array, and within the loop, we destructure each user object to extract the name, address, and age properties. We then log these values to the console for each user.

---

## ✅ Summary

- Learned **nullish coalescing** and property existence checks.
- Handled **nested destructuring** and **dynamic object properties**.
- Built **Student Management System** and **Bookstore Inventory** with dynamic methods.
- Explored **deep copy techniques**, loops, and object iteration.

Day 12 strengthened understanding of **dynamic object handling and best practices in JavaScript**.
