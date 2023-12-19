/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const charMap = new Map();
  for (let w = 0; w < str1.length; w++) {
    charMap.put(str1.charAt(w),1);
  }
  for (let w = 0; w < str2.length; w++) {
  if(!charMap.has(str2.charAt(w)){
  return false;
  } 
  }
  return true;
}

module.exports = isAnagram;
