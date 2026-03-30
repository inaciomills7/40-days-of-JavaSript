// Task 1 - Convert Celsius to Fahrenheit
function celsuiusToFarenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsuiusToFarenheit(32));

//Task 2 - Find the Maximum of Two Numbers
function findMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log(findMax(5, 7));

//Task 3 - Check if a String is a Palindrome

function isPalindrome(str) {
  const lowerStr = str.toLowerCase();
  let start = 0;
  let end = lowerStr.length - 1;
  while (start < end) {
    if (lowerStr.charAt(start) !== lowerStr.charAt(end)) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

console.log(isPalindrome("Civic"));

// Task 4 - Find Factorial of a Number
function factorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));

//Task 5 - Count Vowels in a String
function countVowels(str) {
  const lowerStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < lowerStr.length; i++) {
    if (
      lowerStr.charAt(i) === "a" ||
      lowerStr.charAt(i) === "e" ||
      lowerStr.charAt(i) === "i" ||
      lowerStr.charAt(i) === "o" ||
      lowerStr.charAt(i) === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("this is how to find vowel"));

//Task 6 - Capitalize the First Letter of Each Word in a Sentence
function capitalizeWords(sentence) {
  const lowerSentence = sentence.toLowerCase();
  let result = "";
  for (let i = 0; i < lowerSentence.length; i++) {
    if (i === 0 || lowerSentence.charAt(i - 1) === " ") {
      result += lowerSentence.charAt(i).toUpperCase();
    } else {
      result += lowerSentence.charAt(i);
    }
  }

  return result;
}

console.log(capitalizeWords("i aM a miLLionaire"));

//Task 7 - Use an IIFE to Print “Hello, JavaScript!”

(function (language) {
  console.log(`Hello ${language}!`);
})("JavaScript");

// Task 8 - Create a Simple Callback Function

function greet(name, callback) {
  callback(name);
}

greet("kiibay", function (name) {
  console.log(`Hello ${name}!`);
});

// Task 9 - Create Call Stack Execution Diagram for this flow
// function f1() {}
// function f2() {
//   f1();
// }
// f2();

//  Call Stack:
// [ f1 ]
// [ f2 ]
// → f1 finishes
// [f2]
// → f2 finishes

// Task 10 - Create Call Stack Execution Diagram for this flow

// function f1() {}
// function f2() {}
// function f3() {
//   f1();
// }
// f2();
// f3();
// f1();

// [f2]
// -> f2 done

// [f1]
// [f3]
// -> f1 done
// -> f3 done

// [f1]
// -> f1 done
