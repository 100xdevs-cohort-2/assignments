/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let isAnagram = true;
  const str1Array  = str1.toLowerCase().split('');

  if(str1.length !== str2.length) {
    return false;
  }

  for(const char of str1Array) {
    if(str2.toLowerCase().indexOf(char) === -1) {
      isAnagram = false;
      break;
    }
  }

  return isAnagram;
}

module.exports = isAnagram;
