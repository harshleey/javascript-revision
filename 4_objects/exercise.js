// 🛒 Question 1: Shopping Cart with Map
// Use a Map to manage a shopping cart where keys are product IDs and values are quantities.

// Create a Map for shopping cart
const cart = new Map();

// console.log(cart);

function addToCart(productId, quantity) {
  //   Mine
  //   cart.set(productId, quantity);
  //   Correction
  const currentQty = cart.get(productId) || 0;
  cart.set(productId, currentQty + quantity);
}

function getCartTotalItems() {
  //   const values = cart.values();
  //   let total = 0;

  //   for (let value of values) {
  //     total += value;
  //   }

  //   return total;

  // CORRECTION
  return [...cart.values()].reduce((sum, unit) => sum + unit, 0);
}

cart.set("prod1", 2);
cart.set("prod2", 1);
cart.set("prod3", 3);
// addToCart("prod4", 7);
console.log(cart);
console.log(getCartTotalItems());
console.log(cart.get("prod1"));

// 👥 Question 2: Unique Visitors with Set
// Use a Set to track unique visitors to a website.

const visitors = new Set();

function addVisitor(email) {
  const exists = visitors.has(email);
  if (exists) {
    console.log("Email already exists");

    // Correction
    return false; // Indicate failure
  } else {
    visitors.add(email);
    // Correction
    return true; // Indicate failure
  }
}

function getUniqueVisitorCount() {
  return visitors.size;
}

function getVisitorList() {
  return [...visitors];

  //    return Array.from(visitors);
}

// Test
addVisitor("user1@email.com");
addVisitor("user2@email.com");
addVisitor("user1@email.com"); // Duplicate!
addVisitor("user3@email.com");

console.log(getUniqueVisitorCount());
console.log(getVisitorList());

// 👤 Question 3: User Profile Destructuring
// Use destructuring to extract and format user information.

const user = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  },
  contact: {
    email: "john@example.com",
    phone: "+1234567890",
  },
  preferences: {
    theme: "dark",
    language: "en",
  },
};

// Use destructuring to extract:
// - firstName and lastName from personalInfo
// - email from contact
// - theme from preferences

function getUserDisplayInfo(user) {
  const { personalInfo, contact, preferences } = user;
  const { firstName, lastName } = personalInfo;
  const { email } = contact;
  const { theme } = preferences;

  //   ALTERNATIVE

  return `${firstName} ${lastName} (${email}) - ${
    theme.charAt(0).toUpperCase() + theme.slice(1)
  } theme`;
}

console.log(getUserDisplayInfo(user));

// 🔄 Question 4: Object Merger with Spread
// Use spread operator to merge and update objects.

const defaultSettings = {
  theme: "light",
  language: "en",
  notifications: true,
};

const userSettings = {
  theme: "dark",
  timezone: "EST",
};

// Merge these objects so userSettings overrides defaultSettings
function mergeSettings(defaults, user) {
  return { ...defaults, ...user };
}

const finalSettings = mergeSettings(defaultSettings, userSettings);
console.log(finalSettings);
// Should output: {theme: "dark", language: "en", notifications: true, timezone: "EST"}

// 📊 Question 5: Student Grade Analyzer
// Use Object methods to analyze student grades.
const students = {
  alice: 85,
  bob: 92,
  charlie: 78,
  diana: 96,
  eve: 88,
};

function analyzeGrades(students) {
  const grades = Object.values(students);
  const entries = Object.entries(students);

  //   Calculate average
  const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

  //   Calculate highest
  const highestGrade = Math.max(...grades);
  const highestEntry = entries.find(([name, grade]) => grade == highestGrade);
  const highest = { student: highestEntry[0], grade: highestEntry[1] };

  //   Calculate highest
  const lowestGrade = Math.min(...grades);
  const lowestEntry = entries.find(([name, grade]) => grade == lowestGrade);
  const lowest = { student: lowestEntry[0], grade: lowestEntry[1] };

  return {
    average,
    highest,
    lowest,
  };
  // Return object with:
  // - average grade
  // - highest grade and student name
  // - lowest grade and student name
}

console.log(analyzeGrades(students));
// Should output something like:
// {
//   average: 87.8,
//   highest: { student: "diana", grade: 96 },
//   lowest: { student: "charlie", grade: 78 }
// }
