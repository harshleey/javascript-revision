// 3 Coding Questions (No answers yet)

// Basic Function Declaration
// Write a function declaration called addNumbers that takes two numbers and returns their sum.
function addNumbers(a, b) {
  console.log(a + b);
}
// Test Cases

addNumbers(2, 3); // → 5
addNumbers(-1, 1); // → 0
addNumbers(10, 20); // → 30

// Function Expression Practice
// Create a function expression stored in multiply that multiplies two numbers.
const multiply = function (a, b) {
  console.log(a * b);
};

// Test Cases

multiply(4, 5);
multiply(-3, 6);
multiply(0, 10);

// Named Function Expression (Recursion)
// Create a named function expression called factorial that computes factorial recursively.

const factorial = (num) => {
  return num * factorial(num - 1);
};

// Test Cases
factorial(1); // → 1
factorial(4); // → 24
factorial(5); // → 120
