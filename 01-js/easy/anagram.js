/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }
  
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const letterCount = {};
  let isAnagram = true;

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
      if(letterCount[char]) {
        letterCount[char]++;
      } else {
        letterCount[char] = 1;
      }
  }
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!letterCount[char]) {
      return isAnagram = false;
    }
    letterCount[char]--;
  }
  for (let key in letterCount) {
    if(letterCount[key] !== 0) {
      return isAnagram = false;
    }
  }
  return isAnagram;

}
console.log(isAnagram('listen', 'silent'));

module.exports = isAnagram;
