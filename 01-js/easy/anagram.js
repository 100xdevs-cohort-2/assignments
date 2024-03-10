/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let string1 = str1.replace(/\s/g, '').toLowerCase();
    let string2 = str2.replace(/\s/g, '').toLowerCase();
  
    const finalString1 = string1.split('').sort().join('');
    const finalString2 = string2.split('').sort().join('');
  
  
    return finalString1 === finalString2;
  }
  
  module.exports = isAnagram;