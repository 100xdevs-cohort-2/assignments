/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let s1 = str1;
  let s2 = str2;

  s1 = s1.toLowerCase().split("").sort().join("");
  s2 = s2.toLowerCase().split("").sort().join("");

  return s1 == s2;
}

module.exports = isAnagram;
