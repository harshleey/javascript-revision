function outerFunction() {
  var outerVar = "outer";
  let outerLet = "outer let";
  const outerConst = "outer const";

  function innerFunction() {
    var innerVar = "inner";
    let innerLet = "inner let";

    console.log(outerVar); // "outer" - accessible
    console.log(outerLet); // "outer let" - accessible
    console.log(outerConst); // "outer const" - accessible

    if (true) {
      let blockLet = "block let";
      console.log(innerLet); // "inner let" - accessible
      console.log(blockLet); // "block let" - accessible
    }

    // console.log(blockLet); // ReferenceError - not accessible
  }

  innerFunction();
  // console.log(innerVar); // ReferenceError - not accessible
}
console.log(outerVar);

outerFunction();
