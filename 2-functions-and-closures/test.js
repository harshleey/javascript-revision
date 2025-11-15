const deduct = () => a + b;

const Person = {
  userName: "Fatima",

  speak: () => {
    return this.userName;
  },

  walk: function () {
    return "User is walking";
  },

  run() {
    return "User is running";
  },
};

console.log(Person.speak()); // undefined
console.log(Person.walk()); // User is walking
console.log(Person.run()); // User is running

// Exercises
const square = (n) => ({ value: n, squared: n ** 2 });
console.log(square(5));

const average = (a, b, c) => {
  return Math.round((a + b + c) / 3);
};
console.log(average(10, 20, 30));

const calculator = {
  value: 10,

  double: function () {
    return this.value * 2;
  },
};

console.log(calculator.double());

const sumAll = (numbers) => numbers.reduce((curr, sum) => curr + sum, 0);

const NewPerson = (name) => {
  this.name = name;
};

const timer = {
  seconds: 0,
  start: function () {
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  },
};

const obj = {
  name: "Test",

  method1: function () {
    const inner = () => console.log(this.name);
    inner();
  },

  method2: () => {
    console.log(this.name);
  },

  method3: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  },
};

obj.method1();
obj.method2();
obj.method3();
