/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  str1 = str1.toLocaleLowerCase();
  str2 = str2.toLocaleLowerCase();
  let char = new Array(256);
  for (let i = 0; i < 256; i++) {
    char[i] = 0;
  }
  for (let i = 0; i < str1.length; i++) {
    char[str1.charCodeAt(i)] += 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (char[str2.charCodeAt(i)] === 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
