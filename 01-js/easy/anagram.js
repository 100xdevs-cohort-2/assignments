/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Lengths of the strings are not equal.
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert the argument strings to lowercase for fair comparison.
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let countOfCharacters = {};

  for (let character of str1) {
    countOfCharacters[character] = countOfCharacters[character] ? countOfCharacters[character] + 1 : 1;
  }

  for (let character of str2) {
    if (!countOfCharacters[character]) {
      return false;
    }
    countOfCharacters[character]--;
  }

  return true;
}

module.exports = isAnagram;
