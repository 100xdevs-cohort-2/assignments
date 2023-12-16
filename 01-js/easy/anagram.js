/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charFrequency = {};
  const lowerCaseStr1 = str1.toLowerCase(),
    lowerCaseStr2 = str2.toLowerCase();

  for (const char of lowerCaseStr1) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  for (const char of lowerCaseStr2) {
    if (charFrequency[char]) charFrequency[char]--;
    else return false;
  }

  return true;
}

module.exports = isAnagram;
