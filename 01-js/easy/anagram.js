/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  let ucStr1 = str1.toUpperCase();
  let ucStr2 = str2.toUpperCase();

  for (let i = 0; i < ucStr1.length; i++) {
    if (ucStr2.match(ucStr1[i])) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
