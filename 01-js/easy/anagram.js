/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }
  
  let charMap1 = {};
  let charMap2 = {};

  for(let char of str1.toLowerCase()) {
    charMap1[char] = charMap1[char] + 1 || 1;
  }

  for(let char of str2.toLowerCase()) {
    charMap2[char] = charMap2[char] + 1 || 1;
  }

  for(let char in charMap1) {
    if(charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
