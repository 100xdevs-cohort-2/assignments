/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) count++;
  }

  return count;
}

module.exports = countVowels;
