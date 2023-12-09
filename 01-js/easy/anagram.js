/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    // Remove spaces and convert both strings to lowercase
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

    // Check if the lengths of the cleaned strings are the same
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Create character frequency maps for both strings
    const charCount1 = {};
    const charCount2 = {};

    // Populate character frequency map for the first string
    for (const char of cleanStr1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    // Populate character frequency map for the second string
    for (const char of cleanStr2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Compare the character frequency maps
    for (const char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
          return false;
        }
    }

    return true;
}

module.exports = isAnagram;
