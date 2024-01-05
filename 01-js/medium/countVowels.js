/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) if (str[i] == vowels[j]) count++;
  }

  return count;
}

module.exports = countVowels;
