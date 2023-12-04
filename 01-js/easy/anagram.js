/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  return sortString(str1.toLowerCase()) === sortString(str2.toLowerCase());
}
function sortString(str) {
  // Convert the string to an array of characters
  const charArray = str.split('');

  // Sort the array of characters
  const sortedArray = charArray.sort();

  // Join the sorted characters back into a string
  const sortedString = sortedArray.join('');

  return sortedString;
}
module.exports = isAnagram;
