/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length == str2.length) {
    let arr1 = str1.toUpperCase().split('').sort()
    let arr2 = str2.toUpperCase().split('').sort()
    let str3 = arr1.join('')
    let str4 = arr2.join('')
    let val = (str3 == str4) ? true : false;
    return val
  }
  return false;
}

module.exports = isAnagram;
