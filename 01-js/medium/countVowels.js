/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  str = str.toLowerCase();
  let list = ["a", "e", "i", "o", "u"];

  let f = str.split("").filter((s) => list.includes(s));
  console.log(f);

  const count = str
    .split("")
    .filter((s) => list.includes(s))
    .reduce((total, s) => total + 1, 0);

  return count;
}

module.exports = countVowels;
