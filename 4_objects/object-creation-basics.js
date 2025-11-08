// Creating Objects Exercises
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
car.features = ["GPS", "Backup Camera", "Bluetooth"];

// console.log(car);

// Exercise 3: Create Nested Object
const restaurant = {
  name: "Pizza Palace",
  address: { street: "123 main St", city: "Smallville", zip: "12345" },
  contact: { phone: "555-1234", email: "info@pizzapalace.com" },
  rating: 4.5,
};

// console.log(restaurant);

// Accessing Objects Exercises
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

// console.log(Object.hasOwn(userProfile, "username"));
// console.log(Object.hasOwn(userProfile, "age"));
// console.log(Object.hasOwn(userProfile, "email"));
// console.log(Object.hasOwn(userProfile, "lastLogin"));

// ANOTHER METHOD
// console.log("username" in userProfile);
// console.log("age" in userProfile);
// console.log("email" in userProfile);
// console.log("lastLogin" in userProfile);

// Modifying Objects Exercises
// Exercise 7: Add and Update Properties
const laptop = {
  brand: "Dell",
  model: "XPS 13",
  price: 999,
};

// Make these modifications:
// 1. Add: ram: "16GB"
// 2. Add: storage: "512GB SSD"
// 3. Update: price to 899
// 4. Add: inStock: true

// Your code here:
laptop.ram = "16GB";
laptop.storage = "512GB SSD";
laptop.price = 899;
laptop.inStock = true;

// console.log(laptop);

// Exercise 8: Modify Nested Objects
const company = {
  name: "Tech Solutions",
  founder: {
    firstName: "John",
    lastName: "Doe",
  },
  departments: {
    engineering: 25,
    sales: 15,
    marketing: 10,
  },
};

// Make these changes:
// 1. Change founder's lastName to "Smith"
// 2. Add new department: support: 8
// 3. Increase engineering department to 30
// 4. Add founder's title: "CEO"

// Your code here:
company.founder.lastName = "Smith";
company.departments.support = 8;
company.departments.engineering = 30;
company.founder.title = "CEO";

// console.log(company);

// Exercise 9: Complex Modification
const shoppingList = {
  groceries: ["milk", "bread", "eggs"],
  electronics: ["phone charger"],
  totalItems: 4,
};

// Make these changes:
// 1. Add "butter" to groceries
// 2. Add "headphones" to electronics
// 3. Update totalItems to reflect new count
// 4. Add new category: "clothing" with ["socks", "shirt"]
// 5. Update totalItems again

// Your code here:
shoppingList.groceries.push("butter");
shoppingList.electronics.push("headphones");
shoppingList.totalItems = 6;
shoppingList["clothing"] = ["socks", "shirt"];
shoppingList.totalItems = 8;

// console.log(shoppingList);

// Exercise 10: Delete Properties
const product = {
  id: "P123",
  name: "Smart Watch",
  price: 199,
  category: "Electronics",
  discount: 0.1,
  supplier: "TechCorp",
};

// Delete these properties:
// - discount
// - supplier

delete product.discount;
delete product.supplier;

// console.log(product);

// Mixed Exercises
// Exercise 11: Complete Workflow
// Start with an empty user object
const user = {};

// Step 1: Add basic info
// - name: "Alex Chen"
// - age: 28
// - email: "alex@email.com"
user.name = "Alex Chen";
user.age = 28;
user.email = "alex@email.com";

// Step 2: Add address (nested object)
// - street: "456 Oak Ave"
// - city: "Tech City"
// - country: "USA"
user.address = { street: "456 Oak Ave", city: "Tech City", country: "USA" };

// Step 3: Add preferences array
// - ["reading", "gaming", "hiking"]
user.preferences = ["reading", "gaming", "hiking"];

// Step 4: Update age to 29
user.age = 29;
// Step 5: Add "cooking" to preferences
user.preferences.push("cooking");

// Your code here:

// console.log(user);

// Exercise 12: Transform Object
const rawData = {
  product_name: "Laptop",
  product_price: 1200,
  in_stock: true,
  product_category: "Electronics",
};

// Create a new object with these transformations:
// - product_name → name
// - product_price → price
// - in_stock → available
// - product_category → category
// - Add new property: discount: 0.15

const transformedProduct = {
  // Your code here
  product_name: rawData.product_name,
  product_price: rawData.product_price,
  in_stock: rawData.in_stock,
  product_category: rawData.product_category,
  discount: 0.15,
};

// console.log(transformedProduct);

// Copying Objects Exercises
// Exercise 1: Shallow Copy Methods
const original = {
  name: "Original Object",
  details: {
    id: 1,
    category: "test",
  },
  tags: ["important", "urgent"],
};
const copy1 = Object.assign(original);
const copy2 = { ...original };

copy1.name = "Changed Copy1";
copy2.details.id = 999;
copy2.tags.push("new tag");

// console.log("Original:", original);
// console.log("Copy1:", copy1);
// console.log("Copy2:", copy2);

// Exercise 2: Deep Copy
const complexObject = {
  user: {
    profile: {
      name: "Alice",
      settings: {
        theme: "dark",
        notifications: true,
      },
    },
  },
  permissions: ["read", "write"],
  metadata: {
    created: "2023-01-01",
    version: "1.0",
  },
};

// Create a deep copy using JSON methods
// Then modify the copy and verify original is unchanged

const deepCopy = JSON.parse(JSON.stringify(complexObject));
// Modify the deep copy
deepCopy.user.profile.name = "Bob";
deepCopy.user.profile.settings.theme = "light";
deepCopy.permissions.push("delete");

// console.log("Original:", complexObject);
// console.log("Deep Copy:", deepCopy);

// Spread Operator Exercises
// Exercise 3: Object Merging with Spread

const defaultSettings = {
  theme: "light",
  language: "en",
  notifications: true,
  fontSize: 14,
};

const userSettings = {
  theme: "dark",
  fontSize: 16,
  sidebar: true,
};

const adminSettings = {
  language: "en",
  adminPanel: true,
  notifications: false,
};

// 1. Merge defaultSettings with userSettings (user should override defaults)
// 2. Merge all three objects (admin should have highest priority)
// 3. Create a new object with all settings but change theme to "auto"

const mergedUser = { ...defaultSettings, ...userSettings };
const mergedAdmin = { ...defaultSettings, ...userSettings, ...adminSettings };
const autoTheme = { ...mergedAdmin, theme: "auto" };
// console.log("Merged User:", mergedUser);
// console.log("Merged Admin:", mergedAdmin);
// console.log("Auto Theme:", autoTheme);

// Exercise 4: Spread with Nested Objects
const baseProduct = {
  id: "P100",
  name: "Base Product",
  price: 100,
  details: {
    manufacturer: "Company A",
    warranty: "1 year",
  },
  features: ["feature1"],
};

// Use spread to:
// 1. Create a new product with updated price and new feature
// 2. Create a product with changed manufacturer in details
// 3. Fix the nested object issue you encounter

const updatedProduct = {
  ...baseProduct,
  price: 200,
  features: [...baseProduct.features, "feature2"],
};
const differentManufacturer = {
  ...baseProduct,
  details: {
    ...baseProduct.details,
    manufacturer: "Company B",
  },
};
// console.log("Updated:", updatedProduct);
// console.log("Different Manufacturer:", differentManufacturer);

// Destructuring Exercises
// Exercise 5: Basic Destructuring

const employee = {
  firstName: "Maria",
  lastName: "Garcia",
  position: "Developer",
  salary: 75000,
  department: "Engineering",
  startDate: undefined,
  years: 4,
};

// Destructure to extract:
// 1. firstName, lastName, position into separate variables
// 2. salary and department with different variable names (pay, dept)
// 3. startDate with a default value of "2020-01-01" if undefined
// 4. The rest of properties into 'otherInfo'

// Your code here:
// const { firstName, lastName, position } = employee;
// const { salary: pay, department: dept } = employee;
// const { startDate = "2020-01-01" } = employee;
// const { firstName: fName, ...otherInfo } = employee;

const {
  firstName,
  lastName,
  position,
  salary: pay,
  department: dept,
  startDate = "2020-01-01",
  ...otherInfo
} = employee;

// console.log(firstName, lastName, position);
// console.log(pay, dept);
// console.log(startDate);
// console.log(otherInfo);

// Exercise 6: Nested Destructuring
const order = {
  orderId: "ORD12345",
  customer: {
    name: "John Doe",
    contact: {
      email: "john@email.com",
      phone: "555-0123",
    },
    address: {
      street: "123 Main St",
      city: "Boston",
      zipCode: "02101",
    },
  },
  items: [
    { product: "Laptop", quantity: 1, price: 999 },
    { product: "Mouse", quantity: 2, price: 25 },
  ],
  total: 1049,
  status: "shipped",
};

// Destructure to extract:
// 1. orderId, total, status
// 2. customer name and email
// 3. city from address
// 4. First item's product and quantity
// 5. Provide default values for missing properties

// Your code here:
// const { orderId, total, status } = order;
// const { name: customerName } = order.customer;
// const { email: customerEmail } = order.customer.contact;
// const { city } = order.customer.address;
// const { product: firstProduct, quantity: firstQuantity } = order.items[0];

const {
  orderId,
  total,
  status,
  customer: {
    name: customerName,
    contact: { email: customerEmail },
    address: { city },
  },
  items: [{ product: firstProduct, quantity: firstQuantity }],
} = order;

// console.log(orderId, total, status);
// console.log(customerName, customerEmail);
// console.log(city);
// console.log(firstProduct, firstQuantity);

// Exercise 7: Destructuring in Function Parameters

// Create functions that use destructuring in parameters:
// 1. Function that takes user object and returns full name
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

// 2. Function that takes product object and calculates discount price
function getDiscountPrice({ price, discount }) {
  const discounted = price * discount;
  return discounted.toFixed(2);
}

// 3. Function that takes config object with defaults
function createButton({
  text,
  color = "gray",
  size = "medium",
  disabled = false,
}) {
  // Your code here
  return `Button: ${text}, Color: ${color}, Size: ${size}, Disabled: ${disabled}`;
}

// Test your functions:
const users = { firstName: "Emma", lastName: "Wilson" };
const products = { name: "Phone", price: 599, discount: 0.1 };

console.log(getFullName(users));
console.log(getDiscountPrice(products));
console.log(createButton({ text: "Click me", color: "blue" }));
console.log(createButton({ text: "Submit", size: "large", disabled: true }));

const cart = new Set();
cart.add("apple", 2);
console.log(cart);
