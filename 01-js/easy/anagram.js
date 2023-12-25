/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length != str2.length) return false;
  let res = new Map();
  for (let i = 0; i < str1.length; i++) {
    let s = str1[i];
    res.set(s, (res.get(s) || 0) + 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let s = str2[i];
    if (!res.has(s)) return false;
    res.set(s, (res.get(s) - 1));
  }
  for (let count of res.values()) {
    if (count !== 0) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
