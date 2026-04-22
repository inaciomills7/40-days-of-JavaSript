// T-001: Create an array of 5 elements using the Array Constructor.

//Array Constructor (new Array)
const electronics = new Array("phone", "laptop", "tablet", "camera", "printer");

// T-002: Create an array of 3 empty slots
const empty = [, , ,];
const empty2 = new Array(3);

// T-003: Create an array of 6 elements using the Array literals
// and access the fourth element in the array using its length property.

const electronics2 = ["phone", "laptop", "tablet", "camerra", "printer", "tv"];
console.log(electronics2[electronics2.length - 3]); //last element is elcetronics2.length - 1

//more logical answer
const targetElement = 4; //note: target 4th element; NOT index 4;

const showElement =
  electronics2[
    electronics2.length - (electronics2.length - (targetElement - 1))
  ];
console.log(showElement);

//MORE SIMPLE
console.log(electronics2[targetElement - 1]);

// T-004: Use the for loop on the above array to print elements in the odd index.

// Method 1: step loop
for (let i = 1; i < electronics2.length; i += 2) {
  console.log(electronics2[i]);
}

// Method 2: conditional
for (let i = 0; i < electronics2.length; i++) {
  if (i % 2 !== 0) {
    console.log(electronics2[i]);
  }
}

// Method 3: entries + destructuring
for (let [idx, value] of electronics2.entries()) {
  if (idx % 2 !== 0) {
    console.log(value);
  }
}

//Output : laptop camera tv

//  T-005: Add one element at the front and the end of an array.
electronics2.unshift("microphone"); //front
electronics2.push("radio"); //end
console.log(electronics2);

//T-006: Remove an element from the front and the end of an array.
electronics2.shift(); //microphone (remove first)
electronics2.pop(); //radio (remove last)
console.log(electronics2);

// T-007: Create an array containing the name of your favourite foods(10 foods).
// Destructure the 6th food element from the array using destructuring.

const favFoods = [
  "stake",
  "fried chicken",
  "pizza",
  "burger",
  "salmond",
  "lobster",
  "wagyu",
  "bluefin tuna",
  "Kobe beef",
  "kebab",
];

const [, , , , , , sixthFood] = favFoods;
console.log(sixthFood);

// T-008: Take out the last 8 food items from the above array using the Array destructuring.
// Hint: rest parameter.

const [, , ...restFoods] = favFoods;

console.log(restFoods);

//Clone an Array(Shallow cloning)

const foods = favFoods.slice(); //slice metor
const foods2 = [...favFoods]; //spread operator
const foods3 = Array.from(favFoods); // Array from method
const foods4 = [].concat(favFoods);

foods3[0] = "pussy";

console.log(foods);
console.log(foods2);
console.log(foods3);
console.log(foods4);
console.log(favFoods);

console.log(foods === favFoods); //false
console.log(foods2 === favFoods); //false
console.log(foods3 === favFoods); //false
console.log(foods4 === favFoods); //false

// T-010: Empty an array using its length property
favFoods.length = 0; //[]

// T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6
// once you find the number 5 in that array. Hint: Use for-loop.

const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

for (let num of numbers) {
  if (num === 5) numbers.length = 6;
  break;
}

console.log(numbers);

// T-012: Create an Array of 10 elements. Use the splice() method to empty the array.

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers2.splice(0, numbers2.length);
console.log(numbers2); // []

// T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the
// length property, using the pop() method, using the shift() method, setting the array with [],
// or the splice() method. Which among these methods are most efficient and why?

// The most efficient way to empty an array is by setting arr.length = 0 because it clears the array
// instantly in constant time (O(1)) while preserving the original reference.

// Reassigning arr = [] is also efficient (O(1)), but it creates a new array and does not
// affect other references.

// Methods like pop(), shift(), and splice() are less efficient because they remove elements one by one
// or involve re-indexing, resulting in O(n) or worse time complexity.

// T-014: What happens when you concatenate two empty arrays?

//When concatenating two empty arrays using concat(), the result is still an empty array because there are no elements to merge.
// The method returns a new array without modifying the originals.

// T-015: How can you check if a value is partially matching with any of the elements of an Array?

//i will use includes method of Array to check if a value is matching with of of the element in the array
//example:
numbers.includes(10);

// To check if a value partially matches any element in an array, the best approach is to use the some() method
// combined with a condition like includes(). This allows checking substrings or custom logic inside array elements.
// The includes() method alone only works for exact matches

//T-016: What is the difference between the slice() and splice() methods?

// The slice() method is used to extract a portion of an array without modifying the original array.
// It takes a start and end index, where the end index is not included.

// The splice() method, on the other hand, modifies the original array. It can be used to remove, add,
// or replace elements at any position in the array.

// T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders.
// You must be doing this in an immutable way such that the source array never gets modified.

const alphanumeric = ["Kiibay77", "ABC123", "user789", "12A34B56", "Error-404"];

const ascendingSorted = alphanumeric.toSorted(function (a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
});
const descendingSorted = alphanumeric.toSorted(function (a, b) {
  return a === b ? 0 : a > b ? -1 : 1;
});

console.log(ascendingSorted); //  ['12A34B56', 'ABC123', 'Error-404', 'Kiibay77', 'user789']
console.log(descendingSorted); //['user789', 'Kiibay77', 'Error-404', 'ABC123', '12A34B56']

// T-018: Can you give examples of sparse and dense arrays?

// Dense array → no gaps (every index has a value)
// Sparse array → has “holes” (missing indexes)

// ✅ Dense Array Examples

// These are “normal” arrays where every slot is filled:

const dense1 = [1, 2, 3, 4];

const dense2 = Array.from({ length: 5 }, (_, i) => i);
// [0, 1, 2, 3, 4]

const dense3 = new Array(3).fill(0);
// [0, 0, 0]

// Characteristics:

// length matches actual elements
// Methods like .map() and .forEach() visit every index

// ⚠️ Sparse Array Examples

//These contain empty slots (holes):

const sparse1 = [1, , 3];
// missing index 1

const sparse2 = new Array(5);
// [ <5 empty items> ]

const sparse3 = [];
sparse3[3] = "hello";
// [ <3 empty items>, "hello" ]

// Characteristics:

// length includes empty slots
// Some methods skip holes

//  (Very Important)
const arr = [1, , 3];

arr.map((x) => x * 2);
// [2, <empty>, 6]

// .map() skips the hole, it does NOT treat it as undefined

But: arr.forEach((x) => console.log(x));
// logs: 1, 3 (skips empty)

//T-019: Give a practical usages of the .fill() method

const array = new Array(3).fill(true);
console.log(array); // [true, true, true]

// .fill() is mainly used to quickly initialize or reset arrays with default values,
// but should be used carefully with objects due to shared references.

// The .fill() method is mainly used to initialize or reset arrays with a default value,
// especially when we want to avoid sparse arrays.

// 1. 🧱 Initializing arrays with default values

// Used when we need placeholders:
const scores = new Array(5).fill(0);
// [0, 0, 0, 0, 0]

// Common in: counters, scoreboards, default state in UI apps

// 2. 🎮 Creating grids or fixed-size structures
const board = new Array(3).fill(null);
// Or for 2D structures:
const grid = Array.from({ length: 3 }, () => new Array(3).fill(0));

// Used in: games (tic-tac-toe, chess), matrix problems

//3. 🔄 Resetting existing arrays quickly
let flags = [true, true, true];
flags.fill(false);
// [false, false, false]

//Useful for: resetting form state, clearing flags or toggles

//4. ⚠️ Partial updates in arrays
const arr2 = [1, 2, 3, 4, 5];

arr2.fill(0, 1, 4);
// [1, 0, 0, 0, 5]

// Useful when updating a range of values.

// 5. 💣 Important caveat

// If used with objects, .fill() copies references:

const arrs2 = new Array(3).fill({ value: 1 });

arrs2[0].value = 99;
// all elements change 😬
console.log(arrs2); // [{value: 99}, {value: 99}, {value: 99}]
// 👉 Fix:

const arrs3 = Array.from({ length: 3 }, () => ({ value: 1 }));
arrs3[0].value = 99;

console.log(arrs3); //[{value: 99}, {value: 1}, {value: 1}]

// T-020: How to convert an array to a string?

// In JavaScript, the most common way to convert an array into a string is by using the .join() method.
// It allows you to combine all elements of an array into a single string with a custom separator.

// 1. Using .join() (Recommended approach)

// For example:

const arr4 = ["JavaScript", "is", "fun"];

const result = arr4.join(" ");
console.log(result); // JavaScript is fun

// Here, I used a space " " as the separator to make it readable.

// You can also change the separator depending on the requirement:

const numbers3 = [1, 2, 3, 4];

console.log(numbers3.join("-"));
// "1-2-3-4"

console.log(numbers3.join(""));
// "1234"

// 2. Using .toString() (simpler but less flexible)

// We can also convert an array to a string using .toString(), but it always uses commas as separators.
const arr5 = [10, 20, 30];

console.log(arr5.toString()); //10,20,30

// This is quick, but we cannot customize the format.
// 3. Using String() conversion

// We can also use String() which internally behaves like .toString():

const arr6 = ["A", "B", "C"];

console.log(String(arr6)); //A,B,C

// Consider these input arrays for question T-21 to T-48

// employees array: An array of emplyees working in a department.

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

// departments array: An array of departments where emplyees work.

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

//T-021: Can you filter employees who work in the "Engineering" department?

//fitering using its id
// const engineeringDept = departments.find(
//   (dept) => dept.name === "Engineering"
// );

// const filteredByEngineering = employees.filter(
//   (emp) => emp.departmentId === engineeringDept.id
// );

// console.log(filteredByEngineering);

//build a map
const departmentMapByName = Object.fromEntries(
  departments.map((dept) => [dept.name, dept.id]),
);

const EngineeringId = departmentMapByName["Engineering"];

const filteredByEngineering = employees.filter(
  (emp) => emp.departmentId === EngineeringId,
);

console.log(filteredByEngineering);

// “I first locate the Engineering department once to avoid repeated searches.
// Then I filter employees by matching their departmentId with the department’s id.
// For scalability, I can also precompute a lookup map to reduce repeated O(n) searches into O(1) lookups.”

//  T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".

const departmentMapById = Object.fromEntries(
  departments.map((dept) => [dept.id, dept.name]),
);

const newArr = employees.map(
  (emp) => `${emp.name} (${departmentMapById[emp.departmentId] || "Unknown"})`,
);

console.log(newArr);

//Use Object.fromEntries() to create an ID → value lookup and avoid nested loops.

// Bonus! group the employee by the department

// const group = employees.reduce((acc, emp) => {
//   const depName = departmentMapById[emp.departmentId];

//   if (!acc[depName]) {
//     acc[depName] = [];
//   }

//   acc[depName].push(emp.name);

//   return acc;
// }, {});

//one-liner version(advance)
const group = employees.reduce((acc, emp) => {
  const depName = departmentMapById[emp.departmentId];
  (acc[depName] ??= []).push(emp.name);

  return acc;
}, {});

console.log(group);

// I first convert department IDs into a lookup map for O(1) access.
// Then I use reduce to group employees by department name, initializing arrays dynamically when needed.

//  T-023: Find the highest salary among employees.

// const highestSalary = employees.reduce((acc, emp) => {
//   if (emp.salary > acc) acc = emp.salary;
//   return acc;
// }, employees[0].salary);

//handles empty array safely
const highestSalary = employees.length
  ? employees.reduce(
      (max, { salary }) => Math.max(max, salary),
      employees[0].salary,
    )
  : 0; // or null or throw error

console.log(highestSalary);

// T-024: Check if there is at least one employee in the "Sales" department.

// const departmentMapByName = Object.fromEntries(
//   departments.map((dept) => [dept.name, dept.id]),
// );

const salesEmp = employees.some(
  (emp) => emp.departmentId === departmentMapByName["Sales"],
);

console.log(salesEmp);

// Since I only need to check if at least one employee exists in the Sales department,
// I use some() instead of filter() because it returns a boolean and short-circuits as soon as a match is found.

// T-025: Write a function to filter employees earning more than 6000.

const filterBySalary = (employees, minSalary) => {
  return employees.filter((e) => e.salary > minSalary);
};

console.log(filterBySalary(employees, 6000));

// I use filter() to return a new array containing only employees whose salary is greater than minSalary.
// Since filter() returns a subset of the original array, it’s the appropriate method for this condition-based
// selection.

// T-026: Create an array of employee names only.

const employeeNames = employees.map((emp) => emp.name);

console.log(employeeNames);

// T-027: Calculate the total salary of all employees using

const totalSalary = employees.reduce(
  (total, { salary = 0 }) => total + salary,
  0,
);
console.log("total salary: ", totalSalary);

// I use reduce() to accumulate the total salary. The accumulator keeps track of the running sum,
// and I destructure the salary from each employee for cleaner code.

//  T-028: Is there any employee earning less than 5000?

const earningLessThan5000 = employees.some(({ salary }) => salary < 5000);
console.log(earningLessThan5000);

// I use some() to check if at least one employee earns less than 5000.
// It returns a boolean and short-circuits as soon as a match is found, making it efficient.

//clean reusable version

const hasSalaryBellow = (employees, threshold) =>
  employees.some(({ salary }) => salary < threshold);

console.log(hasSalaryBellow(employees, 5000));

//T-029: Find the first employee who earns exactly 5100.
const firstEmployeeEarn5100 =
  employees.find(({ salary }) => salary === 5100) || null;

console.log(firstEmployeeEarn5100);

// I use find() because I only need the first employee who matches the condition.
// It’s more efficient than filter() since it stops once a match is found. and add fallback
//handling if no empleyee matches

// T-030: Find the last employee in the "HR" department.

// const departmentMapByName = Object.fromEntries(
//   departments.map((dept) => [dept.name, dept.id]),
// );

const lastHrDepEmployee = employees.findLast(
  ({ departmentId }) => departmentId === departmentMapByName["HR"],
);

console.log(lastHrDepEmployee);

// I use findLast() to efficiently locate the last employee in the HR department.
// It iterates from the end and stops as soon as a match is found, avoiding unnecessary iterations.

//  T-031: Find the first employee in the "Marketing" department.

// const departmentMapByName = Object.fromEntries(
//   departments.map((dept) => [dept.name, dept.id]),
// );

const firstMarketingDepEmployee =
  employees.find(
    ({ departmentId }) => departmentId === departmentMapByName["Marketing"],
  ) || null;

console.log(firstMarketingDepEmployee);

// I use find() to retrieve the first employee in the Marketing department.
// It’s more efficient than filter() because it stops as soon as a match is found.

//T-032: Check if all employees earn more than 4000.

const allSalaryMore4000 =
  employees.length > 0 && employees.every(({ salary }) => salary > 4000);

console.log(allSalaryMore4000);

// I use every() to verify that all employees meet the salary condition.
// It returns false as soon as one employee fails, making it efficient.
//handle edge case [].every(...) //true

//More flexible
const allAbove = (employees, minSalary) =>
  employees.every(({ salary }) => salary > minSalary);

console.log(allAbove(employees, 4000));

//T-033: Find the first employee in the "Sales" and "HR" department.

// const departmentMapByName = Object.fromEntries(
//   departments.map((d) => [d.name, d.id])
// );

const firstHR = employees.find(
  ({ departmentId }) => departmentId === departmentMapByName["HR"],
);
const firstSales = employees.find(
  ({ departmentId }) => departmentId === departmentMapByName["Sales"],
);

const firstEmpSalesHr = [firstHR, firstSales].filter(Boolean);

console.log(firstEmpSalesHr);

// Since I need the first employee from specific departments, I use find() for each department.
// find() stops as soon as it finds a match, making it more efficient than filter(),
// which would scan the entire array.

// If the number of departments grows, I would switch to a single-pass solution using a Set to track
// which departments I’ve already captured.
const targetDeps = new Set([
  departmentMapByName["HR"],
  departmentMapByName["Sales"],
]);

const results = [];
const seen = new Set();

for (const emp of employees) {
  if (targetDeps.has(emp.departmentId) && !seen.has(emp.departmentId)) {
    results.push(emp);
    seen.add(emp.departmentId);
  }
}

console.log(results);

//First person in every department
const firstEmployeePerDepartment = employees.reduce((acc, emp) => {
  const departmentName = departmentMapById[emp.departmentId];
  if (!acc[departmentName]) {
    acc[departmentName] = emp;
  }

  return acc;
}, {});

console.log(firstEmployeePerDepartment);

//  T-034: Verify if all employees belong to a department listed in the departments array.

// const departmentMapById = Object.fromEntries(
//   departments.map((d) => [d.id, d.name])
// );

const isEmployeeInDep = employees.every(
  ({ departmentId }) => departmentId in departmentMapById,
);

console.log(isEmployeeInDep);

//another approach (best) - use Set
const departmentIds = new Set(departments.map((d) => d.id));

const isEmployeeInDeps = employees.every(({ departmentId }) =>
  departmentIds.has(departmentId),
);

console.log(isEmployeeInDeps);

// “I use every() to ensure all employees have a valid department. Instead of relying on truthy values,
// I explicitly check membership using a Set, which guarantees correctness and provides O(1) lookup.”

//  T-035: Log each employee's name and department name to the console.
employees.forEach(({ name, departmentId }) => {
  const dep = departmentMapById[departmentId] || "Unknown";
  console.log(`${name} ${dep}`);
});

//I  use forEach() because I’m performing a side effect—logging each employee’s name along with their department.
// Since no transformation or return value is needed, forEach() is the appropriate method.

//T-036: Extract all employee names into a single array.
const empNames = employees.map(({ name = "Unknown" }) => name);

console.log(empNames);

// I use map() because I’m transforming each employee object into a single value (the name).
// It returns a new array with the same length, making it ideal for this type of projection.

// T-037: Increment each employee's salary by 10%
const empIncrementSalary = employees.map((emp) => {
  return {
    ...emp,
    salary: Math.floor(emp.salary * 1.1),
  };
});
console.log(empIncrementSalary);

// I use map() to return a new array of employees with updated salaries. I maintain immutability by returning
// a new object for each employee instead of modifying the original data, and I apply
// a 10% increase using a multiplier of 1.1.

//T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them.
//Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].

const employeesWithSkills = [
  { name: "Alice", skills: ["Excel", "Management"] },
  { name: "Bob", skills: ["Developer"] },
  { name: "Charlie", skills: ["Marketing", "Excel"] },
];

const flattenedSkills = employeesWithSkills.flatMap(({ skills }) => skills);

console.log(flattenedSkills);

// Since the original dataset doesn’t include skills, I first construct a structure where each employee has a
// skills array. Then I use flatMap() to extract and flatten all skills into a single array.

//  T-039: Find the total salary of all employees working in the "Engineering" department.

// const departmentMapById = Object.fromEntries(
//   departments.map((d) => [d.id, d.name])
// );

// const totalSalaryEngineeringDep = employees.reduce((sum, emp) => {
//   if (departmentMapById[emp.departmentId] === "Engineering") {
//     sum += emp.salary;
//   }

//   return sum;
// }, 0);

// console.log(totalSalaryEngineeringDep);

// another solution
const engineeringId = departments.find((d) => d.name === "Engineering").id;

const totalSalaryEngineeringDep = employees.reduce(
  (sum, { departmentId, salary }) =>
    departmentId === engineeringId ? sum + salary : sum,
  0,
);

console.log(totalSalaryEngineeringDep);

// I use reduce() to both filter and sum salaries in a single pass.
// This avoids creating intermediate arrays and keeps the solution efficient.

// T-040: Check if there is any department where all employees earn more than 5000.
const groups = employees.reduce((acc, emp) => {
  const depName = departmentMapById[emp.departmentId];
  (acc[depName] ??= []).push(emp);

  return acc;
}, {});

const hasDepartmentAllAbove5000 = Object.values(groups).some((emps) =>
  emps.every(({ salary }) => salary > 5000),
);

console.log(hasDepartmentAllAbove5000);

// solution without grouping
const depStatus = employees.reduce((acc, emp) => {
  const dept = departmentMapById[emp.departmentId];

  // if (!(dept in acc)) acc[dept] = true;
  acc[dept] ??= true;

  if (emp.salary <= 5000) acc[dept] = false;

  return acc;
}, {});
console.log(depStatus);
const isAnydepSalaryMoreThan5000 = Object.values(depStatus).some(Boolean);
console.log(isAnydepSalaryMoreThan5000);

//“I track each department’s validity using a boolean. Initially, I assume all employees in a department meet
// the condition. If any employee fails, I mark that department as false. Finally, I check if any department
// remains true using some().”

// T-041: Assume each employee has a projects array
// (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).
// Find the total number of unique projects being handled across all employees.

const employeesProject = [
  { id: 1, name: "Alice", projects: ["Project A", "Project B"] },
  { id: 2, name: "Bob", projects: ["Project C"] },
  { id: 3, name: "Charlie", projects: ["Project A", "Project D"] },
];

const empProjects = employeesProject.reduce(
  (acc, { projects }) => {
    for (let p of projects) {
      if (!acc.includes(p)) acc.push(p);
    }
    return acc;
  },

  [],
);

console.log(empProjects);
console.log("numbers of unique projects: ", empProjects.length);

//user Set
const uniqueProjects = new Set(employeesProject.flatMap((emp) => emp.projects));

console.log(uniqueProjects.size);

// “I iterate through all employees and their projects, collecting unique project names. Initially,
// I used an array with includes() to avoid duplicates, but for better performance,
// I would use a Set since it provides constant-time lookups.”

//  T-042: For each employee, find their department name and
//  return an array of employee names with their department names.

// const departmentMapById = Object.fromEntries(
//   departments.map((d) => [d.id, d.name])
// );

const empWithDep = employees.map(({ name, departmentId }) => ({
  name,
  department: departmentMapById[departmentId] || "Unknown",
}));

console.log(empWithDep);

// I use map() to transform each employee into a string combining their name and department.
// I rely on a lookup map for efficient department resolution.

//T-043: Get a list of names of employees earning more than 6000.

// const employeesEarningMore6000 = employees
//   .filter(({ salary }) => salary > 6000)
//   .map(({ name }) => name);

const employeesEarningMore6000 = employees.reduce((acc, { name, salary }) => {
  if (salary > 6000) acc.push(name);
  return acc;
}, []);

console.log(employeesEarningMore6000);

// I first filter employees based on salary, then map the result to extract only their names.
// This keeps the logic clear and readable.

//Group employees who earn more than 6000 by their department name.
const highEarnersByDept = employees.reduce((acc, emp) => {
  if (emp.salary > 6000) {
    const dept = departmentMapById[emp.departmentId];

    (acc[dept] ??= []).push(emp.name);
  }

  return acc;
}, {});

console.log(highEarnersByDept);
// I use reduce() to iterate through employees, filter those earning above 6000, and group them by department using a lookup map.
// I initialize each department array lazily using ??= to avoid redundant checks.

//Find top 2 highest-paid employees
const top2HighestPaid = [...employees]
  .sort((a, b) => b.salary - a.salary)
  .slice(0, 2);

console.log(top2HighestPaid);
// I first create a shallow copy of the array to avoid mutating the original data.
// Then I sort employees by salary in descending order and extract the first two elements using slice.

// T-044: Write a for-of loop to print the names of all employees from the employees array.

for (let { name } of employees) {
  console.log(name);
}
// I use a for...of loop because it directly iterates over array elements.
// I destructure the name property to make the code more concise and readable.

// T-045: Using a for-of loop, print the names of employees earning more than 5000
for (let emp of employees) {
  if (emp.salary > 5000) {
    console.log(emp.name);
  }
}

// T-046: Modify the for-of loop to destructure each employee object and log their name and salary.

for (let { name, salary } of employees) {
  console.log(`${name}: $${salary}`);
}

// I use a for...of loop to iterate over employees and destructure the name and salary properties
// directly in the loop header. This keeps the code concise and readable.

//T-047: Write a for-of loop to match employees with their departments and print the results.

// const departmentMapById = Object.fromEntries(
//   departments.map((d) => [d.id, d.name])
// );

for (const { name, departmentId } of employees) {
  const dept = departmentMapById[departmentId] || "Unknown";
  console.log(`${name}: ${dept}`);
}

// I iterate through employees using a for...of loop and destructure the required fields.
// I then use a lookup map to efficiently match each employee with their department name.

// T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.

for (let [idx, { name }] of employees.entries()) {
  console.log(`${idx}: ${name}`);
}

// I use entries() to get both index and value while iterating through the array. Then I destructure the
// result to access the index and employee name directly, making the loop concise and readable.

// T-049: Given the array-like object below, access the second element and log it:
const arrayLike = { 0: "First", 1: "Second", length: 2 };

const secondElm = Array.from(arrayLike)[1];

console.log(secondElm);

// Since the object is array-like but not a real array, I convert it using
// Array.from() to safely access elements using array indexing.

// T-050: Write a function that takes a variable number of arguments and converts
// the arguments object into a real array using Array.from.

function convertObject() {
  return Array.from(arguments);
}

//  T-051: Write a snippet to select all div elements on a webpage (using document.querySelectorAll)
// and convert the resulting NodeList into an array.

const divElm = Array.from(document.querySelectorAll("div"));

console.log(divElm);

// I use querySelectorAll to get all div elements as a NodeList, then convert it into a
// real array using Array.from so I can use array methods on it.

//  T-052: Merge these two arrays into a single array:

const arrOne = [1, 2];
const arrTwo = [3, 4];

const arrThree = arrOne.concat(arrTwo);
const arrThree2 = [...arrOne, ...arrTwo];

// I can merge arrays using either concat() or the spread operator.
// I prefer spread syntax because it’s more flexible and widely used in modern JavaScrip

//  T-053: Create an array of n duplicate values using Array.from.
// Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]
const createArray = (n, char) => {
  return Array.from({ length: n }, () => char);
};

console.log(createArray(5, "A"));

// I use Array.from with a mapping function to create an array of a fixed length
// and fill it with a specific value in a single step.
// Array.from converts iterables or array-like objects into arrays, and its mapping function
// allows transformation during creation. It works seamlessly with iterators and generators,
// making it useful for building efficient data pipelines.

// T-054: Use Array.from to convert a string like "Hello" into an array of characters.

const convertedString = Array.from("Hello");
console.log(convertedString);
// Since strings are iterable, I can use Array.from() to convert each character into an array element.
// I can also pass a mapping function to transform characters during conversion.

//  T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'],
// group words by their first letter using group().
const fruits = ["apple", "banana", "apricot", "mango", "blueberry"];

const groupby = Object.groupBy(fruits, (fruit) => fruit[0]);

console.log(groupby);

//  Alternative (classic reduce)

const grouped = fruits.reduce((acc, fruit) => {
  const key = fruit[0];
  (acc[key] ??= []).push(fruit);
  return acc;
}, {});

// I use Object.groupBy() to group strings based on their first character.
// The callback extracts the grouping key, which in this case is the first letter of each word.

//T-057: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.

const arrNum = [3, 7, 3, 2, 3, 8, 7, 7];
const groupNumbers = arrNum.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

const maxAppeared = Math.max(...Object.values(groupNumbers));
const mostAppeared = Object.keys(groupNumbers)
  .filter((num) => groupNumbers[num] === maxAppeared)
  .map(Number);
console.log(mostAppeared);

// I use reduce() to build a frequency map, then find the maximum occurrence,
// and finally extract all numbers that match that frequency.

// “Return ONLY ONE most frequent number”

const most = Object.entries(groupNumbers).reduce(
  (max, [num, count]) =>
    count > max.count ? { num: Number(num), count } : max,
  { num: null, count: 0 },
);

console.log(most.num);

//T-058: Find the median of [5, 2, 9, 1, 3, 6, 8].

const arrNums = [5, 2, 9, 1, 3, 6, 8];
const sorted = arrNums.toSorted((a, b) => a - b);
const mid = Math.floor(sorted.length / 2);
const median =
  sorted.length % 2 === 0 ? (sorted[mid] + sorted[mid + 1]) / 2 : sorted[mid];

console.log(median);

// I sort the array first, then compute the middle index. If the array length is odd, I return the middle element.
// If it’s even, I return the average of the two middle elements.

// T-059: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).

const toConvert = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const converted = Object.fromEntries(toConvert);
console.log(converted);

// Here I’m using Object.fromEntries(), which is designed specifically to convert an
// array of key–value pairs into an object.

// Each inner array represents [key, value], and fromEntries maps them directly into object properties.
// It’s efficient and avoids manual iteration.

//  T-060: Flatten and convert all letters to uppercase in one step using flatMap().
//  Here is input array: [['a', 'b'], ['c', 'd']].

const toflat = [
  ["a", "b"],
  ["c", "d"],
];
const flatted = toflat.flatMap((item) => {
  return item.map((i) => i.toUpperCase());
});
console.log(flatted);

// I used flatMap() to combine transformation and flattening in a single pass. Inside it, I map each
// sub-array to uppercase using map(), and flatMap() automatically flattens the result by one level.
// This avoids creating an intermediate nested array and is more efficient and concise than
// chaining map().flat().

// T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']

const toCountFruits = ["apple", "banana", "apple", "mango", "banana", "banana"];

const countedFruits = toCountFruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;

  return acc;
}, {});

console.log(countedFruits);

// I used reduce() to accumulate counts into an object.
//For each fruit, I check if it already exists in the accumulator.
// If it does, I increment it; otherwise, I initialize it to 1.
// This gives me a frequency map in a single pass with O(n) time complexity.

//T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']

const alphabet = ["a", "b", "c", "d", "e"];
const sliced = alphabet.slice(1, 4);
console.log(sliced);

// I used slice() to extract a portion of the array without mutating the original.
// The start index is inclusive and the end index is exclusive, so slice(1, 4) returns elements
// from index 1 up to, but not including, index 4.

//  T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()

const numberss = [9, 3, 1, 6, 8];

const ascSorted = numberss.toSorted((a, b) => a - b);
console.log(ascSorted);

// toSorted() returns a new sorted array without mutating the original.
// For ascending order, I use (a, b) => a - b, which ensures smaller numbers come first.

//T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()

const revNumber = [1, 2, 3, 4, 5];
const toRev = revNumber.toReversed();
console.log(toRev); //[5, 4, 3, 2, 1]
console.log(revNumber); // [1, 2, 3, 4, 5]
const rev = revNumber.reverse();
console.log(rev); //[5, 4, 3, 2, 1]
console.log(revNumber); //[5, 4, 3, 2, 1]

//toReversed() is the modern, immutable alternative to reverse().
// It returns a new reversed array, whereas reverse() modifies the original array in place.

//T-065: Group the follwing array elements based on age(Adult vs Non-Adult):

const users = [
  { name: "Alice", age: 55 },
  { name: "Bob", age: 3 },
  { name: "Charlie", age: 25 },
];

const adultGroup = Object.groupBy(users, ({ age }) =>
  age >= 18 ? "Adult" : "Non-Adult",
);

console.log(adultGroup);

// I used Object.groupBy() to categorize users into two groups based on age.
// The callback determines the group key dynamically — ‘Adult’ for users 18 and above, and ‘Non-Adult’ otherwise.
// This approach is clean and avoids manual accumulation logic like reduce().

//T-066: Find the longest word in this sentence using Array and Array methods:
// "40 Days of JavaScript by tapaScript is a powerful initiative".

const sentence = "40 Days of JavaScript by tapaScript is a powerful initiative";
const longestWord = sentence.split(" ").reduce((acc, word) => {
  if (word.length > acc.length) {
    acc = word;
  }

  return acc;
}, "");

console.log(longestWord);

//I split the sentence into words, then used reduce() to track the longest word.
// On each iteration, I compare the current word’s length with the accumulator’s length and keep the longer one.
// This runs in a single pass with O(n) time complexity.

//T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]

const firstArr = [1, 2, 3, 4];
const secondArr = [3, 4, 5, 6];

const commonBetween = secondArr.filter((n) => firstArr.includes(n));
console.log(commonBetween);

//I used filter() to iterate over one array and includes() to check if each element exists in the other array.
// This gives me the intersection of the two arrays in a simple and readable way.

// ⚠️Performance issue
// includes() → O(n)
// inside filter() → O(n)
// Total: O(n²)

//Optimized Solution (Set-based)

const set1 = new Set(firstArr);
// console.log(set1);
const commonBetweens = [...new Set(secondArr)].filter((n) => set1.has(n));
console.log(commonBetweens);

// For better performance, I convert one array into a Set to get constant-time lookups.
// This reduces the time complexity from O(n²) to O(n), which is more efficient for large datasets.

// 🔥 Why this is better
// Set.has() → O(1)
// Overall → O(n)
