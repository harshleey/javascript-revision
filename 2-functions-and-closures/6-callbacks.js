// function sayHello() {
//   console.log("Hello!");
// }

// function executeCallback(callback) {
//   console.log("About to call the callback...");
//   callback();
//   console.log("After callback");
// }

// executeCallback(sayHello);

// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// function processUser(callback) {
//   const user = "Damian";
//   callback(user);
// }

// processUser(greet);

// console.log("Starting...");
// setTimeout(function () {
//   console.log("This runs after 2 seconds!");
// }, 2000);

// console.log("Waiting...");

// function getUserDetails(userId, callback) {
//   console.log(`Fetching data for user ${userId}...`);

//   setTimeout(function () {
//     const userData = {
//       id: userId,
//       name: "John Doe",
//       email: "john@example.com",
//     };

//     callback(userData);
//   }, 3000);
// }

// getUserDetails(234, function (user) {
//   console.log("Fetching user's details:", user);
// });

// function calculate(a, b, callback) {
//   const sum = a + b;
//   callback(sum);
// }

// calculate(3, 5, function (result) {
//   console.log("The result is:", result);
// });

// function processor(array, callback) {
//   const sum = array.reduce((acc, curr) => acc + curr, 0);
//   const double = array.map((x) => x * 10);

//   callback(sum, double);
// }

// processor([3, 5, 8, 90, 32], function (sum, double) {
//   console.log("The result of sum and double respectively", sum, ...double);
// });

// function countDown(seconds, onComplete) {
//   setTimeout(function () {
//     for (let i = seconds; i >= 0; i--) {
//       console.log(i);
//     }
//     onComplete();
//   }, 1000);
// }

// countDown(5, function () {
//   console.log("Countdown complete!");
// });

function processArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

// const numbers = [1, 2, 3, 4, 5];

// const doubled = processArray(numbers, (num) => num * 2);
// console.log(doubled);

// Test 2: Convert to strings
// const strings = processArray(numbers, (num) => `Number: ${num}`);
// console.log(strings); // ✅ Output: ["Number: 1", "Number: 2", "Number: 3", "Number: 4", "Number: 5"]

// Test 3: Square numbers
// const squared = processArray(numbers, (num) => num ** 2);
// console.log(squared); // ✅ Output: [1, 4, 9, 16, 25]

// Your implementation here
function myFilter(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) == true) {
      result.push(arr[i]);
    }
  }

  return result;
}

// Test cases
// const numbers = [1, 2, 3, 4, 5, 6];

// // Test 1: Filter even numbers
// const evens = myFilter(numbers, (num) => num % 2 === 0);
// console.log(evens); // Should output: [2, 4, 6]

// // Test 2: Filter numbers greater than 3
// const greaterThan3 = myFilter(numbers, (num) => num > 3);
// console.log(greaterThan3); // Should output: [4, 5, 6]

// // Test 3: Filter strings
// const words = ["apple", "banana", "cat", "dog"];
// const longWords = myFilter(words, (word) => word.length > 3);
// console.log(longWords); // ✅ Output: ["apple", "banana"]

function fetchUserData(userId, onSuccess, onError) {
  setTimeout(() => {
    const users = {
      1: { id: 1, name: "Alice", age: 25 },
      2: { id: 2, name: "Bob", age: 30 },
      3: { id: 3, name: "Charlie", age: 35 },
    };

    let result = [];

    // Approach 1
    // const result = Object.values(users).filter((user) => user.id === userId);

    // Approach 2
    for (let user in users) {
      if (users[user].id === userId) {
        result.push(users[user]);
      }
    }

    // Approach 3
    const user = users[userId];

    if (result.length != 0) {
      onSuccess(result[0]);
    } else {
      onError("User not found");
    }
  }, 1000);
}

// Test cases
// Test 1: Successful fetch
fetchUserData(
  2,
  (user) => console.log("Success:", user),
  (error) => console.log("Error:", error)
);

// Test 2: User not found
fetchUserData(
  999,
  (user) => console.log("Success:", user),
  (error) => console.log("Error:", error)
);

// More professional version:
function fetchUserDataOptimized(userId, onSuccess, onError) {
  setTimeout(() => {
    const users = {
      1: { id: 1, name: "Alice", age: 25 },
      2: { id: 2, name: "Bob", age: 30 },
      3: { id: 3, name: "Charlie", age: 35 },
    };

    const user = users[userId];

    // Simulate random failures for realism
    if (Math.random() < 0.1) {
      // 10% chance of failure
      onError("Server error - please try again");
    } else if (user) {
      onSuccess(user);
    } else {
      onError(`User with ID ${userId} not found`);
    }
  }, 1000);
}

function customFilter(arr, callback) {
  // Pseudocode
  // Initialize an array to hold the values that meets the condition in the loop
  // Loop through the array,
  // Create a conditional to check if the value meets the condition set by the callback
  // If it meets the condition, push the value to the array
  // After the loop runs it course, return the array

  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) == true) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}
const numbers = [1, 2, 3, 4, 5, 6];
// Test 1: Filter even numbers
const evens = customFilter(numbers, (num) => num % 2 === 0);
console.log(evens);
// Expected: [2, 4, 6]

function customFilterOptimized(arr, callback) {
  // Pseudocode
  // 1. Validate input: arr must be an array and callback must be a function
  // 2. Initialize an empty array for results
  // 3. Loop through each element
  // 4. Call callback with (element, index, originalArray)
  // 5. If callback returns truthy value, push element to result
  // 6. Return filtered result.

  if (!Array.isArray(arr)) {
    console.log("Error: First argument must be an array");
  }

  if (typeof callback != "function") {
    console.log("Error: Second argument must be a function");
  }

  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}

// ALTERNATIVE
function customFilterAlt(arr, callback) {
  const filtered = [];
  for (const [index, element] of arr.entries()) {
    if (callback(element, index, arr)) {
      filtered.push(element);
    }
  }
  return filtered;
}

function customMap(arr, callback) {
  // Pseudocode
  // 1. Validate Input: arr must be array and callback must be a function
  // 2. Initialize an empty result array
  // 3. Loop through each element in the arr
  // 4. Call callback with (element, index, originalArray)
  // 5. Push callback element to result array
  // 6. Return mapped result

  if (!Array.isArray(arr)) {
    console.error("Error: First argument must be an array");
    throw new TypeError("First argument must be an array");
  }

  if (typeof callback !== "function") {
    console.log("Error: Second argument must be an function");
    throw new TypeError("Second argument must be a function");
  }

  let mapped = [];

  for (let i = 0; i < arr.length; i++) {
    mapped.push(callback(arr[i], i, arr));
  }

  return mapped;
}

const number = [1, 2, 3, 4, 5];
// Test 1: Double each number
const doubled = customMap(number, (num) => num * 2);
console.log(doubled);

// Test 2: Create objects with index
const withIndex = customMap(number, (num, index) => ({ value: num, index }));
console.log(withIndex);
