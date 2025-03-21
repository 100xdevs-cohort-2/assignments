/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if(str1.length !== str2.length) return false;

  const countAnagram = {};

  for(const char of str1) {
    const str = char.toLowerCase();
    if(countAnagram[str]) {
      countAnagram[str]++;
    }else{
      countAnagram[str] = 1;
    }
  }

  for(const char of str2) {
    const str = char.toLowerCase();
    if(countAnagram[str]) {
      if(countAnagram[str] === 1) {
        delete countAnagram[str];
      }else {
        countAnagram[str]--;
      }
    }
  }

  return Object.keys(countAnagram).length === 0;
}

module.exports = isAnagram;
