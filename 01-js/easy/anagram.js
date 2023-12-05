/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const freqMap = new Map();

  for (let i = 0; i < str1.length; i++) {
    let key = str1.charAt(i).toLowerCase();
    if (freqMap.has(key)) {
      freqMap.set(key, freqMap.get(key) + 1);
    } else {
      freqMap.set(key, 1);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let key = str2.charAt(i).toLowerCase();
    if (freqMap.has(key)) {
      if (freqMap.get(key) === 1) {
        freqMap.delete(key);
      } else {
        freqMap.set(key, freqMap.get(key) - 1)
      }
    } else {
      return false;
    }
  }

  return freqMap.size === 0;
}

module.exports = isAnagram;
