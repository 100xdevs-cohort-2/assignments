/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let vowelCount = 0;

  if (str.length === 0) return vowelCount;

  const lowerCaseStr = str.toLowerCase();

  for (const char of lowerCaseStr) {
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    )
      vowelCount++;
  }

  return vowelCount;
}

module.exports = countVowels;
