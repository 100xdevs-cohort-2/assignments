/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // remove all spaces
  str1 = str1.replace(/\s/g, '');
  str2 = str2.replace(/\s/g, '');

  // convert all alphabet in same either in capital or small 
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // sort the str1 and str2
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  // check now weather these two string are equal or not, On that basis return true or false 
  return str1===str2;
}

module.exports = isAnagram;
