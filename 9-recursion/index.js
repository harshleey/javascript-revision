function countDown(n) {
  // Base case
  if (n === 0) {
    return;
  }

  console.log(n);
  //   Recursive case
  countDown(n - 1);
}
// countDown(5);

function countUp(n) {
  // Base case
  if (n === 0) {
    return;
  }

  //   Recursive case
  countDown(n - 1);
  // Each recursion holds it's own copy on n
  console.log(n);
}
// countUp(5);

function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
// console.log(factorial(7));
// Step-by-step:

// factorial(5) returns 5 * factorial(4)

// factorial(4) returns 4 * factorial(3)

// factorial(3) returns 3 * factorial(2)

// factorial(2) returns 2 * factorial(1)

// factorial(1) returns 1 (base case)

// Then it "unwinds":

// factorial(2) = 2 × 1 = 2

// factorial(3) = 3 × 2 = 6

// factorial(4) = 4 × 6 = 24

// factorial(5) = 5 × 24 = 120

function power(base, exponent) {
  if (exponent <= 1) {
    return base;
  }

  return base * power(base, exponent - 1);
}

// console.log(power(2, 3)); // Should return 8

function findMax(arr) {
  if (arr.length === 0) {
    return;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  let first = arr[0];
  let rest = arr.slice(1);

  return first > findMax(rest) ? first : findMax(rest);
}

// console.log(findMax([34, 3, 1, 4, 1, 5, 9, 2])); // Should return 9

// Complex
function isPalindrome(str) {
  let initialValue = str;
  let length = str.length;
  if (length === 0) {
    return false;
  }

  if (length === 1) {
    return str[length - 1];
  }

  //   console.log(constantValue);

  return str[length - 1] + isPalindrome(str.substring(0, length - 1));
}

console.log(isPalindrome("racecar")); // Should return true

function countElements(arr) {
  // Base case: empty array
  if (arr.length === 0) {
    return 0;
  }

  //   console.log(arr);
  return 1 + countElements(arr.slice(1));
}

// console.log(countElements([2, 4, 5, 2, 8, 8, 90]));

function sumEvenNumbers(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let current = arr[0];
  let rest = arr.slice(1);

  if (current % 2 === 0) {
    return current + sumEvenNumbers(rest);
  }
  return sumEvenNumbers(rest);
}

// console.log(sumEvenNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]));

function sumToN(n) {
  if (n === 0) {
    return 0;
  }

  return n + sumToN(n - 1);
}

// console.log(sumToN(5)); // Should return 15 (1+2+3+4+5)
// console.log(sumToN(3)); // Should return 6 (1+2+3)

function printChars(str) {
  if (str.length === 0) {
    return;
  }

  console.log(str.charAt(0));
  printChars(str.slice(1));
}

// printChars("hello");
// Should print:
// h
// e
// l
// l
// o

function reverseString(str) {
  let length = str.length;
  if (length === 0) {
    return;
  }

  if (length === 1) {
    return str[length - 1];
  }

  return str[length - 1] + reverseString(str.substring(0, length - 1));
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("abc")); // "cba"

function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(isEven(0)); // true
