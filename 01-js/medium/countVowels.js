/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase();
  let vowelCount = 0;

  // Define a set of vowels (both uppercase and lowercase)
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  // Iterate through each character in the input string
  for (let char of str) {
    // Check if the character is a vowel using the set
    if (vowels.has(char)) {
      // If it's a vowel, increment the count
      vowelCount++;
    }
  }

  // Return the final count of vowels
  return vowelCount;
}

module.exports = countVowels;
