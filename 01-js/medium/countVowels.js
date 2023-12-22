/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase();
  let vowel = ["a", "e", "i", "o", "u"];
  let ct = 0;

  str.split("").forEach((char, index) => {
    if (vowel.includes(char)) ct++;
  });

  return ct;
}

module.exports = countVowels;
