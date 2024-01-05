/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let n = str1.length;
  let m = str2.length;
  let isAna = true;
  if (n != m) return false;
  else {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (str1[i].toUpperCase() == str2[j].toUpperCase()) break;
        if (j == m - 1 && str1[i].toUpperCase() != str2[j].toUpperCase())
          isAna = false;
      }
    }
    return isAna;
  }
}
module.exports = isAnagram;
