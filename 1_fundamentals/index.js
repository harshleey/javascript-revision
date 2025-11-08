// 💻 CODING QUESTIONS (10)
// 1. Write a program to check if a number is even or odd.
const evenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");
console.log(evenOrOdd(4));
console.log(evenOrOdd(7));

// 2. Write a program that prints all numbers from 1 to 10 using a loop.
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 3. Given two numbers, swap their values without using a third variable.
let x = 10;
let y = 30;
x = y;
console.log(x);
console.log(y);

// CORRECTION
function swapNumbers(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}

// 4. Write a program that sums all numbers from 1 to n.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// CORRECTION
function sumUp(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// 5. Write a function that takes a string and returns its length without using .length.
function stringLength(data) {
  let count = 0;
  for (let i = 1; i <= data.length; i++) {
    count++;
  }
  console.log(count);
}
stringLength("HEllo");

// CORRECTION
function getStringLength(str) {
  let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
}

// 6. Write a function that reverses a string.
function reverseString(data) {
  let reversedString = "";
  //   Correction: It is data.length - 1 not data.length
  for (let i = data.length; i >= 0; i--) {
    reversedString += data.charAt(i);
  }
  console.log(reversedString);
}
reverseString("HEllo");

// 7. Write a program that finds the largest number in an array.
let largeArray = [399, 5, 6, 9, 90];
let max = 0;
for (let i = 0; i < largeArray.length; i++) {
  if (max < largeArray[i]) {
    max = largeArray[i];
  }
}
console.log(max);

// ANOTHER SOLUTION:
function findLargest(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      num = max;
    }
  }
  return max;
}

// 8. Write a loop that prints only even numbers between 1 and 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}
// 9. Write a function that counts how many times a character appears in a string.
const countCharacter = (data, character) => {
  let count = 0;
  for (let i = 1; i <= data.length; i++) {
    if (data.charAt(i) === character) count++;
  }
  console.log(count);
};
countCharacter("hello", "l");

function countChar(str, character) {
  let count = 0;
  for (let char of str) {
    if (char === character) count++;
  }
  return count;
}

// 10. Write a program that prints “Fizz” for multiples of 3, “Buzz” for multiples of 5, and “FizzBuzz” for multiples of both from 1–15.
const fizzBuzz = () => {
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz();
