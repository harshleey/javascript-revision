// 💻 2 Coding Questions

// 1️⃣ Greeting Function
// Create a function greetUser(name = "Guest") that returns "Welcome, <name>!"
function greetUser(name = "Guest") {
  return `Welcome, ${name}!`;
}

// Test:
console.log(greetUser()); // → "Welcome, Guest!"
console.log(greetUser("Tomiwa")); // → "Welcome, Tomiwa!"

// 2️⃣ Combine Defaults

// Write a function multiply(a, b = 2) that returns the product.

function multiply(a, b = 2) {
  return a * b;
}
// Test:
console.log(multiply(5)); // → 10
console.log(multiply(3, 3)); // → 9
