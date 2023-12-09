/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp i.e, both the string should have same length and frequency of letters.
*/

function isAnagram(str1, str2) {
  let n = str1.length;
  let m = str2.length;

  str1 = str1.toLowerCase().split("").sort().join("");
  str2 = str2.toLowerCase().split("").sort().join("");

  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;
