/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Convert the string to lowercase to make the comparison case-insensitive
  const lowerCaseStr = str.toLowerCase();

  // Define a set of vowels for efficient lookup
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  // Count the number of vowels in the string
  let vowelCount = 0;

  for (const char of lowerCaseStr) {
    if (vowels.has(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

module.exports = countVowels;
