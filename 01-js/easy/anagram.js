/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  if (str1.length !== str2.length) {
    return false; 
  }

  const map1 = {};
  const map2 = {};

  for (let char of str1) {
    map1[char] = (map1[char] || 0) + 1;
  }

 
  for (let char of str2) {
    map2[char] = (map2[char] || 0) + 1;
  }
  for (let key in map1) {
    if (map1[key] !== map2[key]) {
      return false; 
    }
  }

  return true;
}

module.exports = isAnagram;