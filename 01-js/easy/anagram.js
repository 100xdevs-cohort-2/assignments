/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let charArray1 = str1.split('');
  let charArray2 = str2.split('');

  charArray1.sort();
  charArray2.sort();

  for (let i = 0; i < charArray1.length; i++) {
    if (charArray1[i] != charArray2[i]) {
      return false;
    }
  }
  return true;
}


module.exports = isAnagram;
