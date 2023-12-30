/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  str
    .split("")
    .forEach((s) => {
      if (vowels.includes(s.toLowerCase())) vowelCount++;
    });
  return vowelCount;
}

module.exports = countVowels;