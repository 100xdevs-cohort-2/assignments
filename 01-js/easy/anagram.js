/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let arr1 = str1.split('').sort();
  str1 = arr1.join();
  let arr2 = str2.split('').sort();
  str2 = arr2.join();
  return str1 == str2;
}

module.exports = isAnagram;
