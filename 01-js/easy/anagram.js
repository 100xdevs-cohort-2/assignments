/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length != str2.length) return false;
  if (str1.length == 0 && str2.length == 0) return true;
  for (let i = 0; i < str1.length; i++) {
    let pos = str2.search(str1[i]);
    if (pos == -1) return false;
  }
  return true;
}

module.exports = isAnagram;
