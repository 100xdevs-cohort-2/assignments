/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  const str1Map = new Map();
  const str2Map = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (str1Map.has(str1[i])) {
      str1Map.set(str1[i], str1Map.get(str1[i]) + 1);
    } else {
      str1Map.set(str1[i], 1);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2Map.has(str2[i])) {
      str2Map.set(str2[i], str2Map.get(str2[i]) + 1);
    } else {
      str2Map.set(str2[i], 1);
    }
  }
  if (str1Map.size !== str2Map.size) {
    return false;
  }
  for (let [key, value] of str1Map) {
    if (!str2Map.has(key) || str2Map.get(key) !== value) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
