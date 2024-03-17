/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase
  let sorted1 = str1.replace(/\s/g, '').toLowerCase().split('').sort().join('');
  let sorted2 = str2.replace(/\s/g, '').toLowerCase().split('').sort().join('');
  return sorted1 === sorted2;
}

module.exports = isAnagram;


module.exports = isAnagram;
