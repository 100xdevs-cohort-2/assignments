/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let map = {};
  for (const ch of str1) {
    if (map.hasOwnProperty(ch.toLowerCase())) {
      map[ch.toLowerCase()] = map[ch.toLowerCase()] + 1;
    } else {
      map[ch.toLowerCase()] = 1;
    }
  }
  for (const ch of str2) {
    if (map.hasOwnProperty(ch.toLowerCase())) {
      if (map[ch.toLowerCase()] === 1) delete map[ch.toLowerCase()];
      else map[ch.toLowerCase()] = map[ch.toLowerCase()] - 1;
    } else {
      return false;
    }
  }
  if (Object.keys(map).length === 0) return true;
  else return false;
}

module.exports = isAnagram;
