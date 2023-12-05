/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const map1 = new Map();
  const map2 = new Map();
        
  if(a.length !== b.length){
      return false;
  }
        
  for (const char of a) {
      map1.set(char, (map1.get(char) || 0) + 1);
  }
  for (const char of b) {
      map2.set(char, (map2.get(char) || 0) + 1);
  }
        
  for (const [key, value] of map1) {
      if (map2.get(key) !== value) {
          return false;
      }
  }
  return true;

}

module.exports = isAnagram;
