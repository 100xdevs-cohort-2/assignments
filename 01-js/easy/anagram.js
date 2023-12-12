/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // O(n) time | O(n) space
  if (str1.length != str2.length) return false;
  let chars = new Map();
  for (let i = 0; i < str1.length; i++)
    chars.set(str1.charAt(i).toLowerCase(), true);
  for (let i = 0; i < str2.length; i++) {
    if (!chars.has(str2.charAt(i).toLowerCase())) return false;
  }
  return true;
}

module.exports = isAnagram;
