// 1. Grocery List Manager
// You have an array: let groceries = ["milk", "eggs", "bread"].
// Add "apples" to the list
// Remove the first item
// Show how many items are left
let groceries = ["milk", "eggs", "bread"];
groceries.push("apples");
groceries.shift();
console.log(groceries);

// 2. Name Formatter
// You have a name: let name = "john smith". Make it proper case so it shows "John Smith".

function nameFormatter(name) {
  let index = name.indexOf(" ");
  return (
    name.substring(0, 1).toUpperCase() +
    name.substring(1, index) +
    " " +
    name.substring(index + 1, index + 2).toUpperCase() +
    name.slice(index + 2)
  );
}

function nameFormatterOptimized(name) {
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.log(nameFormatter("john smith"));
console.log(nameFormatterOptimized("stephen wardell curry"));

// 3. Simple Search
// You have an array of colors: ["red", "blue", "green", "yellow"]. Check if "blue" is in the array and return true or false.
function searchItem(arr, item) {
  return arr.includes(item);
}

console.log(searchItem(["red", "blue", "green", "yellow"], "blue"));

// 4. Price Calculator
// You have prices: [10, 20, 30]. Add them all together to get the total.
function priceCalculator(arr) {
  return arr.reduce((total, num) => total + num, 0);
}
console.log(priceCalculator([10, 20, 30]));

// 5. Email Checker
// You have an email: "user@example.com". Check if it contains "@" and return true or false.
function emailChecker(email, character) {
  return email.includes(character);
}
console.log(emailChecker("user@example.com", "@"));

// 6. Sentence Builder
// You have words: ["I", "love", "JavaScript"]. Join them into a sentence with spaces.
function sentenceBuilder(arr) {
  return arr.join(" ");
}
console.log(sentenceBuilder(["I", "love", "JavaScript"]));

// 7. Todo List Basics
// You have a todo list: let todos = ["learn arrays", "practice strings"].
// Add a new todo
// Mark the last one as done (remove it)
// Show the updated list
let todos = ["learn arrays", "practice strings"];
todos.push("Go to BTS concert");
todos.pop();
console.log(todos);

// 8. Simple Password Check
// Check if a password is at least 8 characters long: let password = "hello123".

function passwordCheck(password) {
  return password.length >= 8;
}

console.log(passwordCheck("hello123"));

// 9. Number String Converter
// You have numbers as strings: ["1", "2", "3"]. Convert them to actual numbers.
function convertStringToNumber(arr) {
  return arr.map((x, index, arr) => parseInt(x));
}

console.log(convertStringToNumber(["1", "2", "3"]));

// 10. Name Initials
// Get the first letter of each word from "John Doe" to create initials "J.D."
function extractInitials(name) {
  let index = name.indexOf(" ");
  return (
    name.substring(0, 1).toUpperCase() +
    "." +
    name.substring(index + 1, index + 2) +
    "."
  );
}

function extractInitialsOptimized(name) {
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase() + ".")
    .join("");
}

console.log(extractInitialsOptimized("shai gilgeous alexander"));

function userNameFormatter(users) {
  // Pseudocode
  // 1. Validate input: Array must be an array
  // 2. Initialize a new array to hold result
  // 3. Validate input: array data must be a string
  // 4. Loop through the array

  return users.map((name) =>
    name
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")
  );
}
const users = ["john doe", "jane smith", "bob JONES"];
console.log(userNameFormatter(users));

function productSearch(arr, item) {
  let itemLower = item.toLowerCase();
  //   return arr
  //     .map((product) => product.toLowerCase())
  //     .filter((item) => item.includes(itemLower));

  // CORRECTION
  return arr.filter((product) => product.toLowerCase().includes(itemLower));
}

const products = [
  "Laptop Dell XPS",
  "iPhone 13 Pro",
  "Samsung Galaxy S21",
  "MacBook Pro 16",
  "iPad Air",
];

console.log(productSearch(products, "Pro"));

function slugGenerator(title) {
  //   return title
  //     .slice(0, title.length - 1)
  //     .split(" ")
  //     .map((word) => word.toLowerCase())
  //     .join("-");
  return title
    .toLowerCase()
    .replace(/[!,.'"?]/g, "")
    .split(" ")
    .filter((word) => word.length > 0)
    .join("-");
}

console.log(slugGenerator("My Awesome Blog Post!"));
console.log(slugGenerator("Hello, World!")); // "hello-world"
console.log(slugGenerator("What's Up?")); // "whats-up"
console.log(slugGenerator("  Multiple   Spaces  "));
