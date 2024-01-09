/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  const regx = /[aeiou]/gi;
  const ans = str.match(regx);
  if (ans == null) return 0;
  return ans.length;
}

module.exports = countVowels;
