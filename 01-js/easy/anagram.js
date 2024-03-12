/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if( str1.length != str2.length ) {
    return false;
  }

  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  let charCountOfString1 = {};
  let charCountOfString2 = {};

  for(let ch of str1) {
    charCountOfString1[ch] = (charCountOfString1[ch] || 0) + 1;
  }
  for(let ch of str2) {
    charCountOfString2[ch] = (charCountOfString2[ch] || 0) + 1;
  }

  for(let key in charCountOfString1) {
    if(charCountOfString1[key] !== charCountOfString2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
