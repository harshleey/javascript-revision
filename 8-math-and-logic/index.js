// Count digits in a number
function countDigits(n) {
  let count = 0;
  while (n > 0) {
    console.log("Before div:", n);
    n = Math.floor(n / 10);
    console.log("After div:", n);
    count++;
  }
  return count;
}

// Reverse a number
function reverseNumber(n) {
  let reversed = 0;
  while (n > 0) {
    console.log("Before Modulus:", n);
    const digit = n % 10; // First loop, this will be 34 remainder 5 so this picks 5 as we only need the modulus
    console.log("After Modulus and Before reversal:", n, digit);
    reversed = reversed * 10 + digit; // First loop; 0 * 10 + 5
    console.log("Before Div and After reversal:", n, digit, reversed);
    n = Math.floor(n / 10);
    console.log("After div:", n);
  }
  return reversed;
}

// console.log(countDigits(34567128));
console.log(reverseNumber(345));
