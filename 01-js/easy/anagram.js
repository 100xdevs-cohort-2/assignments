/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// This function creates an array of 26 elements, each representing the count of the corresponding character in the string.
function getChars(str) {
  let chars = []
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char >= 'A' && char <= 'Z') {
      char = char.toLowerCase();
    }
    chars.push(char.charCodeAt(0));
  }
  // sort the array
  chars.sort();
  return chars;
}

function isAnagram(str1, str2) {
  let chars1 = getChars(str1);
  let chars2 = getChars(str2);
  for (let i = 0; i < 26; i++) {
    if (chars1[i] !== chars2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
