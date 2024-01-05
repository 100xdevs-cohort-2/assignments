/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Convert the input string to lowercase and split it into an array of characters
  let word = str.toLowerCase();
  
  // Define an array of vowels
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  // Initialize a counter for counting vowels
  let count = 0;

  // Iterate through each character in the string
  for (let i = 0; i < word.length; i++) {
    // Check if the character is a vowel using the Set
    if (vowels.has(word[i])) {
      count++;
    }
  }
  
  // Return the final count of vowels
  return count;
}

module.exports = countVowels;