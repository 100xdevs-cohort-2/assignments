/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length){
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const letterMap1 = new Map();
  const letterMap2 = new Map();
  for(let i=0; i<str1.length; i++) {
    const count = letterMap1.get(str1[i]) ? letterMap1.get(str1[i]) + 1 : 1;
    letterMap1.set(str1[i], count);
  }
  for(let i=0; i<str2.length; i++) {
    const count = letterMap2.get(str2[i]) ? letterMap2.get(str2[i]) + 1 : 1;
    letterMap2.set(str2[i], count);
  }
  for(let [key, val] of letterMap1){
    if(letterMap2.get(key) !== val){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
