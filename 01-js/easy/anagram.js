/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = sortString(str1.toLowerCase());
  str2 = sortString(str2.toLowerCase());
  if (str1 === str2) {
    return true;
  }
  return false;
}

function sortString(str) {
  let charArray = str.split('')
  charArray.sort();
  let ans = charArray.join('')
  return ans;
}

module.exports = isAnagram;
