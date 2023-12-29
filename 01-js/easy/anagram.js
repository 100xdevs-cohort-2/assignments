/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const string1 = str1.replace(/ /g, '').toLowerCase();
  const string2 = str2.replace(/ /g, '').toLowerCase();
  return string1.split('').sort().join('') === string2.split('').sort().join('')
}

module.exports = isAnagram;
