/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (letter of str1) {
    if (!str2.includes(letter)) {
      return false;
    }
  }
  return str1.length === str2.length;
}

module.exports = isAnagram;
