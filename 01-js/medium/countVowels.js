/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  const vowelRegex = /[aeiouAEIOU]/g;
  const vowels = str.match(vowelRegex);
  return vowels ? vowels.length : 0;
}

module.exports = countVowels;
