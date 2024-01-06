/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Remove spaces and convert strings to lowercase
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();

  // If lengths are different, they can't be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  // Create character frequency maps for both strings
  const charMap1 = {};
  const charMap2 = {};

  // Populate the frequency maps
  for (let char of str1) {
    charMap1[char] = (charMap1[char] || 0) + 1;
  }

  for (let char of str2) {
    charMap2[char] = (charMap2[char] || 0) + 1;
  }

  // Compare the character maps
  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
