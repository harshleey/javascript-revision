// 2 Coding Questions (No answers yet)

// 1️⃣ Square Every Number (map + arrow)
// Create an arrow function called squareNumbers that takes an array and returns a new array of the squares of each element.
const squareNumbers = (arr) => arr.map((item) => item * 2);
// Test Cases

console.log(squareNumbers([1, 2, 3])); // → [1, 4, 9]
squareNumbers([4, 5]); // → [16, 25]
squareNumbers([]); // → []
// CORRECTION
// const squareNumbers = (arr) => arr.map((item) => item ** 2);

// 2️⃣ Lexical this Demonstration
// Write an object counter with:

const counter = {
  count: 0,

  increase: () => {
    setTimeout(() => {
      return this.count++;
    }, 1000);
  },
  //   console.log(count)
};
// a property count = 0
// a method increase that uses setTimeout and an arrow function to increment count after 1 second.

// Test Code
counter.increase();
// After 1 second → counter.count should be 1

// Problem:

// You used an arrow function for increase.
// → Arrow functions don’t have their own this; they inherit it from their parent scope (likely the global or module scope).

// So this.count is undefined or refers to the global this, not counter.

// The count inside counter never updates.

// CORRECTION
// const counter = {
//   count: 0,
//   increase() {
//     setTimeout(() => {
//       this.count++;
//       console.log(this.count);
//     }, 1000);
//   },
// };
