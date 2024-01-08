/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Check if lengths of the strings are equal
  if (str1.length !== str2.length) {
      return false;
  }

  // Convert both strings to lowercase
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();

  // Create a character count object for str1
  const charCount = {};
  for (let char of s1) {
      charCount[char] = (charCount[char] || 0) + 1;
  }

  // Compare character counts with str2
  for (let char of s2) {
      if (!charCount[char]) {
          return false; // Character not found or count doesn't match
      }
      charCount[char] -= 1;
  }

  return true;
}

module.exports = isAnagram;
