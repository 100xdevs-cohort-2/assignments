/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length !== str2.length) return false;

  let map1 = {},
    map2 = {};
  for (let i = 0; i < str1.length; i++) {
    let char1 = str1.charAt(i);
    if (map1[char1]) {
      map1[char1]++;
    } else {
      map1[char1] = 1;
    }

    let char2 = str2.charAt(i);
    if (map2[char2]) {
      map2[char2]++;
    } else {
      map2[char2] = 1;
    }
  }

  for (let key in map1) {
    if (!map2[key] || map1[key] !== map2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
