/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str2 = str2.trim().toLowerCase();
  str1 = str1.trim().toLowerCase();

  if (str1.split("").sort().join("") == str2.split("").sort().join("")) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;
