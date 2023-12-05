/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let objstr1 = {};
  let objstr2 = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (ch of str1) {
    objstr1[ch] = (objstr1[ch] || 0) + 1;
  }

  for (ch of str2) {
    objstr2[ch] = (objstr2[ch] || 0) + 1;
  }

  for (ch in objstr1) {
    if (objstr1[ch] !== objstr2[ch]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
