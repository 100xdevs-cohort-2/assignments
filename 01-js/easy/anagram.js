/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // convert strings to lowercase and sort them
  sortedStr1 = str1.toLowerCase().split("").sort().join("");
  sortedStr2 = str2.toLowerCase().split("").sort().join("");
  // compare, return true if equal
  return sortedStr1 == sortedStr2 ? true : false;
}

module.exports = isAnagram;
