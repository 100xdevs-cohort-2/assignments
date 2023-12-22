/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').reduce((prev, curr) => {
    return vowels.includes(curr.toLowerCase()) ? (prev += 1) : prev;
  }, 0);
}

module.exports = countVowels;
