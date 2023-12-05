/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let freq = new Map();
  for (let i = 0; i < str1.length; i++) {
    freq.set(str1[i], (freq.get(str1[i]) || 0) + 1);
  }

  for (let i = 0; i < str2.length; i++) {
    freq.set(str2[i], (freq.get(str2[i]) || 0) - 1);
  }

  for (let char of freq.values()) {
    if (char !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
