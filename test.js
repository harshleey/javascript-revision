// function outerFunction() {
//   var outerVar = "outer";
//   let outerLet = "outer let";
//   const outerConst = "outer const";

//   function innerFunction() {
//     var innerVar = "inner";
//     let innerLet = "inner let";

//     console.log(outerVar); // "outer" - accessible
//     console.log(outerLet); // "outer let" - accessible
//     console.log(outerConst); // "outer const" - accessible

//     if (true) {
//       let blockLet = "block let";
//       console.log(innerLet); // "inner let" - accessible
//       console.log(blockLet); // "block let" - accessible
//     }

//     // console.log(blockLet); // ReferenceError - not accessible
//   }

//   innerFunction();
//   // console.log(innerVar); // ReferenceError - not accessible
// }
// console.log(outerVar);

// outerFunction();

function processArray(array, callback) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }

  return result;
}
const numbers = [1, 2, 3, 4, 5];
const strings = processArray(numbers, (num) => `Number: ${num}`);
console.log(strings); // ✅ Output: ["Number: 1", "Number: 2", "Number: 3", "Number: 4", "Number: 5"]

let obj = { "1a": 10, b: 20 };
// console.log(obj.1a);
