/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Convert the string to lowercase to make the comparison case-insensitive
  const lowercaseStr = str.toLowerCase();

  // Define the set of vowels
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  // Count the number of vowels in the string
  let vowelCount = 0;
  for (char in lowercaseStr) {
    if (vowels.has(lowercaseStr[char])) {
      vowelCount++;
    }
  }
  return vowelCount;
}

module.exports = countVowels;
