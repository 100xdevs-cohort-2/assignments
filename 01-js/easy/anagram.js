/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length == str2.length) {
    for (let index = 0; index < str1.length; index++) {
      if (!str1.toLowerCase().includes(str2[index].toLowerCase())) {
        return false;
      }
    }
  } else{
    return false;
  }
  return true;
}

module.exports = isAnagram;
