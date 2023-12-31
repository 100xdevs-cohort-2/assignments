/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let freqMap = {};

  for(let iter = 0; iter < str1.length; iter++) {
    if(freqMap[str1.charAt(iter)]) {
      freqMap[str1.charAt(iter)] = freqMap[str1.charAt(iter)] + 1;
    } else {
      freqMap[str1.charAt(iter)] = 1;
    }
  }
  
  for(let iter = 0; iter < str2.length; iter++) {
    if(freqMap[str2.charAt(iter)]) {
      freqMap[str2.charAt(iter)] = freqMap[str2.charAt(iter)] - 1;
    } else {
      freqMap[str2.charAt(iter)] = 1;
    }
  }
  const keys = Object.keys(freqMap);
  
  for(let iter = 0; iter < keys.length; iter++) {
    if(freqMap[keys[iter]] != 0 ) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
