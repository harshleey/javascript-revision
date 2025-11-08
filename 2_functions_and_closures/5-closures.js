// 💻 3 Coding Questions

// 1️⃣ Counter Closure

// Write a function makeCounter() that returns a function which increments and returns a counter value.
// function makeCounter() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// CORRECTION:
// function makeCounter() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }
// Test:
// const counter = makeCounter();
// counter(); // → 1
// counter(); // → 2

// 2️⃣ Private Variable

// Write a function secretMessage() that stores a private variable message and returns a function to access it.
function secretMessage(secret) {
  let message = "";

  function access() {
    message = secret;
    console.log(message);
  }

  return access;
}

//  CORRECTION
// function secretMessage(secret) {
//   return function() {
//     return secret;
//   };
// }
// Test:
// const reveal = secretMessage("Lexlance rocks!");
// reveal();
// reveal(); // → "Lexlance rocks!"

// 3️⃣ Once Function

// Write a function once(fn) that ensures fn is called only once.
// CORRECTION:
function once(fn) {
  let called = false;
  let result;

  return function () {
    if (!called) {
      called = true;
      result = fn();
      return result;
    }
    return undefined;
  };
}

// Test:
// const hello = () => "Hi!";
// const onceHello = once(hello);
// onceHello(); // → "Hi!"
// onceHello(); // → undefined

// 🔥 Question 1: Shopping Cart with Closures

function createShoppingCart() {
  let total = 0;
  let items = [];

  return {
    addItem: function (item, price, unit) {
      items.push({ item, price, unit });
      total = items.reduce((total, curr) => total + curr.price * curr.unit, 0);
      // console.log(total);
      return total;
    },

    removeItem: function (item) {
      let index = items.findIndex((element) => element.item == item);
      items.splice(index, 1);
      total = items.reduce((total, curr) => total + curr.price * curr.unit, 0);
    },

    applyDiscount: function (discount) {
      return (total = total * (1 - discount / 100));
    },

    getTotal: function () {
      return `Total: $${total.toFixed(2)}`;
    },

    getItems: function () {
      return items;
    },
  };
}

const cart = createShoppingCart();

// Test 1: Add items and get total
cart.addItem("Apple", 1.5, 3);
cart.addItem("Banana", 0.5, 6);
console.log(cart.getTotal());

// Test 2: Remove item and update total
cart.removeItem("Apple");
console.log(cart.getTotal());
// Expected: "Total: $3.00"

// Test 3: Apply discount
cart.applyDiscount(10); // 10% discount
console.log(cart.getTotal());
// Expected: "Total: $2.70"

// Test 4: List items
console.log(cart.getItems());
