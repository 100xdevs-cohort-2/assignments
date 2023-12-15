/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  obj = {};
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    obj[str1.charAt(i).toLowerCase()] = 1;
  }
  for (let i = 0; i < str1.length; i++) {
    obj[str2.charAt(i).toLowerCase()] = 0;
  }
  for (let value of Object.values(obj)) {
    if (value !== 0) return false;
  }
  return true;
}

module.exports = isAnagram;
