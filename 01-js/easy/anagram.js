/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1.toLowerCase();
  str2.toLowerCase();

  if (str1.length != str2.length) {
    return false;
  }

  let chars = {};

  for (let char of str1.toLowerCase()) {
    chars[char] = (chars[char] || 0) + 1;
  }

  for (let char of str2.toLowerCase()) {
    if (!chars[char]) {
      return false;
    }
    chars[char]--;
  }
  return true;
}

module.exports = isAnagram;
