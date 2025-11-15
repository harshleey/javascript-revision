// Drill 1: Identify Hoisting Behavior
console.log(a); // undefined
var a = 1;

console.log(b); // ReferenceError
let b = 2;

foo(); // foo
function foo() {
  console.log("foo");
}

bar(); // Undefined => TypeError
var bar = function () {
  console.log("bar");
};

// Drill 2: Fix Recursion Issues
function printNumbers(n) {
  if (n <= 0) {
    console.log(n);
  }

  console.log(n);
  printNumbers(n - 1);
}
// CORRECTION
// 1. Add base case
// function printNumbers(n) {
//     if (n < 0) return; // Base case
//     console.log(n);
//     printNumbers(n - 1);
// }

function power(base, exponent) {
  if (exponent == 1) {
    return Math.pow(base, exponent);
  }

  return base * power;
}

// 2. Fix recursive call
// function power(base, exponent) {
//     if (exponent === 0) return 1; // Better base case
//     return base * power(base, exponent - 1); // Decrement exponent
// }

// 3. Not modifying input
function findInArray(arr, target) {
  if (arr[0] === target) return true;
  return findInArray(
    arr.filter((x) => x == target),
    target - 1
  );
}

// CORRECTION
// 3. Modify input in recursive call
// function findInArray(arr, target) {
//     if (arr.length === 0) return false; // Base case
//     if (arr[0] === target) return true;
//     return findInArray(arr.slice(1), target); // Reduce array
// }
