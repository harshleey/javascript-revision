// Exercise 1: Create a Book Object
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310,
  isAvailable: true,
  genres: ["Fantasy", "Adventure"],
};

// console.log(book);

// Exercise 2: Create a Car Object
const car = new Object();
car.make = "Honda";
car.model = "Civic";
car.year = 2023;
car.color = "blue";
car.feature = ["GPS", "Backup Camera", "Bluetooth"];

// console.log(car);

// Exercise 3: Create Nested Object
const restaurant = {
  name: "Pizza Palace",
  address: { street: "123 main St", city: "Smallville", zip: "12345" },
  contact: { phone: "555-1234", email: "info@pizzapalace.com" },
  rating: 4.5,
};

// console.log(restaurant);

// Exercise 4: Access Different Properties
const student = {
  name: "Emma Johnson",
  age: 20,
  grades: {
    math: 95,
    science: 88,
    history: 92,
  },
  enrolled: true,
};

// Access and log these values:
// 1. Student's name
// 2. Science grade
// 3. Whether student is enrolled
// 4. All grades as an object

console.log(student.name);
console.log(student.grades.science);
console.log(student["enrolled"]);
console.log(student.grades);

// Exercise 5: Dynamic Property Access
const weather = {
  temperature: 72,
  condition: "sunny",
  humidity: 45,
  windSpeed: 8,
};

const properties = ["temperature", "condition", "windSpeed"];

for (let i = 0; i < properties.length; i++) {
  console.log(weather[properties[i]]);
}

// Exercise 6: Check Property Existence
const userProfile = {
  username: "coder123",
  email: "coder@email.com",
  joined: "2023-01-15",
};

// Check if these properties exist and log true/false:
// - "username"
// - "age"
// - "email"
// - "lastLogin"

console.log(Object.hasOwn(userProfile, "username"));
console.log(Object.hasOwn(userProfile, "age"));
console.log(Object.hasOwn(userProfile, "email"));
console.log(Object.hasOwn(userProfile, "lastLogin"));
