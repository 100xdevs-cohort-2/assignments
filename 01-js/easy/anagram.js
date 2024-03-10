/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function sortString(str) {
  // Split the string into an array of characters, sort it, and join it back into a string
  return str.split('').sort().join('');
}

function isAnagram(str1, str2) {
  // Use the sortString function to get sorted versions of both strings
  var sortedStr1 = sortString(str1);
  var sortedStr2 = sortString(str2);

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}


module.exports = isAnagram;
