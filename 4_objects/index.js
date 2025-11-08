const person = { name: "Alice", age: 25, city: "NYC" };

for (let key in person) {
  console.log(key, person[key]);
}
// Output:
// name Alice
// age 25
// city NYC

const keys = Object.keys(person);
// ["name", "age", "city"]

keys.forEach((key) => {
  console.log(person[key]);
});

const entries = Object.entries(person);
// [["name", "Alice"], ["age", 25], ["city", "NYC"]]

entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// 🗺️ Map vs Set - Optimized Lookups
// Map - Key-Value pairs (like upgraded Object)

const map = new Map();
map.set("name", "Alice");
map.set("age", 25);
console.log(map);

console.log(map.get("name")); // "Alice"
console.log(map.has("age")); // true
console.log(map.size); // 2

// Keys can be ANY type (objects, functions, etc.)
const objKey = { id: 1 };
map.set(objKey, "secret data");

console.log(map);

// Set - Unique values only
const set = new Set();

set.add("apple");
set.add("bananas");
set.add("apple");

console.log(set.has("apple")); // true
console.log(set.size);

// Perfect for removing duplicates from array
const numbers = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(numbers)];
console.log(unique);

// 🎭 Shallow vs Deep Copy
// Shallow Copy - Copies first level only

const original = {
  name: "Alicia Florrick",
  hobbies: ["Reading law books", "Drinking"],
};

// Method 1: Spread operator
const shallow1 = { ...original };

// Method 2: Object.assign()
const shallow2 = Object.assign({}, original);

// PROBLEM: Nested objects are still referenced!
// shallow1.hobbies.push("cooking");
console.log(shallow1);
console.log(original.hobbies); // ["reading", "gaming", "cooking"] 😱

// Deep Copy - Copies everything
// Method 1: JSON (simple objects only)
const deep1 = JSON.parse(JSON.stringify(original));

// Method 2: Structured cloning (modern)
const deep2 = structuredClone(original);

// Method 3: Library like Lodash
// const deep3 = _.cloneDeep(original);

// Now it's truly independent!
deep1.hobbies.push("swimming");
console.log(original.hobbies); // ["reading", "gaming"] ✅
console.log(deep1);

const human = { name: "Alice", age: 25, city: "NYC" };

// Extract specific properties
const { name, age } = human;
console.log(name); // "Alice"
console.log(age); // 25

// Rename variables
const { name: personName, city: location } = human;

// Function parameters
function printUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Spread - combine objects
const combined = { ...obj1, ...obj2 };
// {a: 1, b: 2, c: 3, d: 4}

// Rest - collect remaining properties
const { a, ...rest } = combined;
console.log(a); // 1
console.log(rest); // {b: 2, c: 3, d: 4}
