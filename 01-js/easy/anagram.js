/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// anagram.js

function isAnagram(str1, str2) {
  // Create objects to store character frequencies for both strings
  const objStr1 = {};
  const objStr2 = {};

  // Convert strings to lowercase for case-insensitive comparison
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  // Check if the lengths are different, return false if true
  if (lowerStr1.length !== lowerStr2.length) {
    return false;
  }

  // Populate objStr1 with character frequencies from lowerStr1
  for (const ch of lowerStr1) {
    objStr1[ch] = (objStr1[ch] || 0) + 1;
  }

  // Populate objStr2 with character frequencies from lowerStr2
  for (const ch of lowerStr2) {
    objStr2[ch] = (objStr2[ch] || 0) + 1;
  }

  // Compare the character frequencies in both objects
  for (const key in objStr1) {
    if (objStr1[key] !== objStr2[key]) {
      return false;
    }
  }

  return true;
}

// Export the function if used in a module
module.exports = isAnagram;

