/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let temp = new Array(256).fill(0);
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length != str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    temp[str1.charCodeAt(i)]++;
  }
  for (let i = 0; i < str2.length; i++) {
    temp[str2.charCodeAt(i)]--;
  }

  for (let i = 0; i < 256; i++) {
    if (temp[i] != 0) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
