// Create a product object with: name, price, category, inStock
// Then access each property using both dot and bracket notation

// Your solution here:
const product = {
  name: "Sugar",
  price: 20,
  category: "Groceries",
  inStock: false,
};

console.log(product.name);
console.log(`$${product["price"]}`);

const user = {
  username: "coder123",
  email: "coder@email.com",
  loggedIn: false,
};

// 1. Change loggedIn to true
// 2. Add a new property: lastLogin with today's date
// 3. Change username to "superCoder123"

// Your solution here:
user.loggedIn = true;
user["lastLogin"] = new Date();
user.username = "superCoder123";
console.log(user);

const shoppingCart = {
  apple: 2.5,
  banana: 1.75,
  orange: 3.0,
  grapes: 4.25,
};

// Calculate the total price of all items
let total = Object.values(shoppingCart)
  .reduce((total, price) => total + price, 0)
  .toFixed(2);

let sum = 0;
for (let item in shoppingCart) {
  sum += shoppingCart[item];
}

// Your solution here:

console.log(`Total: $${total}`); // Should output: Total: $11.50

const inventory = {
  laptop: 15,
  mouse: 45,
  keyboard: 30,
  monitor: 20,
  headphones: 60,
};

// Find all items with quantity less than 25
const lowStock = {};

for (let item in inventory) {
  if (inventory[item] < 25) {
    lowStock[item] = inventory[item];
  }
}

// Your solution here:

console.log(lowStock); // Should output: { laptop: 15, monitor: 20 }

const products = {
  phone: 799,
  tablet: 399,
  laptop: 1299,
  mouse: 25,
  keyboard: 75,
  monitor: 299,
};

// Find all products with price greater than $300
const expensiveProducts = {};

for (let item in products) {
  if (products[item] > 300) {
    expensiveProducts[item] = products[item];
  }
}

// Your solution here:

console.log(expensiveProducts);
// Should output: { phone: 799, laptop: 1299 }

const fruits = {
  apple: 10,
  banana: 15,
  kiwi: 20,
  strawberry: 5,
  orange: 12,
  pear: 8,
};

// Find all fruits with names longer than 5 characters
const longNameFruits = {};
for (let fruit in fruits) {
  if (fruit.length > 5) {
    longNameFruits[fruit] = fruits[fruit];
  }
}

// Your solution here:

console.log(longNameFruits);
// Should output: { banana: 15, strawberry: 5, orange: 12 }
const store = {
  shirt: { price: 25, inStock: true },
  pants: { price: 40, inStock: false },
  shoes: { price: 80, inStock: true },
  hat: { price: 15, inStock: true },
  jacket: { price: 120, inStock: false },
};

// Find all items that are in stock
const availableItems = {};
for (let item in store) {
  if (store[item].inStock == true) {
    availableItems[item] = store[item];
  }
}

// Your solution here:

console.log(availableItems);
// Should output: { shirt: { price: 25, inStock: true }, shoes: { price: 80, inStock: true }, hat: { price: 15, inStock: true } }

const menu = {
  burger: 8.99,
  pizza: 12.99,
  salad: 6.99,
  steak: 24.99,
  pasta: 10.99,
  soda: 2.99,
};

// Find all menu items that cost $10 or less
const affordableItems = {};
for (let item in menu) {
  if (menu[item] <= 10) {
    affordableItems[item] = menu[item];
  }
}
// Your solution here:

console.log(affordableItems);
// Should output: { burger: 8.99, salad: 6.99, pasta: 10.99, soda: 2.99 }

const items = {
  mathBook: "education",
  novel: "entertainment",
  scienceKit: "education",
  movie: "entertainment",
  textbook: "education",
  game: "entertainment",
};

// Find all items in the "education" category
const educationalItems = {};

// Your solution here:
for (let item in items) {
  if (items[item] == "education") {
    educationalItems[item] = items[item];
  }
}

console.log(educationalItems);
// Should output: { mathBook: "education", scienceKit: "education", textbook: "education" }
const students = {
  alice: 85,
  bob: 92,
  charlie: 78,
  diana: 96,
  eve: 88,
  frank: 74,
};

// Find all students with scores of 85 or higher
const highAchievers = {};

// Your solution here:
for (let student in students) {
  if (students[student] >= 85) {
    highAchievers[student] = students[student];
  }
}

console.log(highAchievers);
// Should output: { alice: 85, bob: 92, diana: 96, eve: 88 }

const employees = {
  john: { age: 28, department: "IT", salary: 60000 },
  sarah: { age: 35, department: "HR", salary: 55000 },
  mike: { age: 42, department: "IT", salary: 75000 },
  lisa: { age: 29, department: "Finance", salary: 65000 },
  tom: { age: 31, department: "IT", salary: 70000 },
};

// Find all IT department employees under age 35
const youngITEmployees = {};

// Your solution here:
for (let employee in employees) {
  if (employees[employee].department == "IT" && employees[employee].age < 35) {
    youngITEmployees[employee] = employees[employee];
  }
}
console.log(youngITEmployees);
// Should output: { john: { age: 28, department: "IT", salary: 60000 }, tom: { age: 31, department: "IT", salary: 70000 } }

const sales = {
  tv: { original: 500, discount: 50 },
  radio: { original: 100, discount: 10 },
  computer: { original: 800, discount: 100 },
  headphone: { original: 150, discount: 0 },
  speaker: { original: 200, discount: 25 },
};

// Find all items with discount greater than $20
const goodDeals = {};

// Your solution here:
for (let product in sales) {
  if (sales[product].discount > 20) {
    goodDeals[product] = sales[product];
  }
}
console.log(goodDeals);
// Should output: { tv: { original: 500, discount: 50 }, computer: { original: 800, discount: 100 }, speaker: { original: 200, discount: 25 } }
