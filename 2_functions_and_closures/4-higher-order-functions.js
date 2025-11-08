// 💻 4 Coding Questions

// 1️⃣ Double Array Values

// Write a function doubleArray(arr) using map() to return each element * 2.
function doubleArray(arr) {
  return arr.map((x) => x * 2);
}
// Test:
doubleArray([1, 2, 3]); // → [2, 4, 6]

// 2️⃣ Get Even Numbers

// Write a function getEvens(arr) that returns only even numbers using filter().
function getEvens(arr) {
  return arr.filter((x) => x % 2 == 0);
}
// Test:
// getEvens([1, 2, 3, 4, 5, 6]); // → [2, 4, 6]

// 3️⃣ Sum All Numbers

// Write a function sumNumbers(arr) using reduce().
function sumNumbers(arr) {
  return arr.reduce((curr, sum) => curr + sum, 0);

  //   CORRECTION
  //  return arr.reduce((sum, curr) => sum + curr, 0);
}

// Test:
// sumNumbers([1, 2, 3, 4]); // → 10

// 4️⃣ Compose Two Functions

// Write a function compose(f, g, x) that returns f(g(x)).
function compose(f, g, x) {
  return (f = () => (g = (x) => x * 2));

  //   CORRECTION
  //   return f(g(x));
}

// // Test:
const add1 = (x) => x + 1;
const double = (x) => x * 2;
compose(add1, double, 5);
