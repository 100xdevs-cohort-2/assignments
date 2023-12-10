/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  str = str.toLowerCase();
  let countVowels = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let char of str) {
    if (vowels.includes(char)) {
      countVowels += 1;
    }
  }

  return countVowels;
}

module.exports = countVowels;
