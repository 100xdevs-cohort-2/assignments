/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function sortString(s) {
  var charArray = s.split("");

  charArray.sort();

  var sortedString = charArray.join("");

  return sortedString;
}

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  str1 = sortString(str1);
  str2 = sortString(str2);
  if (str1 === str2) return true;
  else return false;
}

module.exports = isAnagram;
