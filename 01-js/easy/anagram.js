/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // If both strings are of different lengths, return false.
  if (str1.length != str2.length) {
    return false;
  }
  // Remove spaces from both strings and convert them to lowercase.
  // Arrange the alphabets in sorted order for easy comparison.
  let newStr1 = str1.toLowerCase().split("").sort();
  let newStr2 = str2.toLowerCase().split("").sort();
  // Compare each character of both strings.
  // If any character mismatches, return false.
  for (let index = 0; index < newStr1.length; index++) {
    if (newStr1[index] != newStr2[index]) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;