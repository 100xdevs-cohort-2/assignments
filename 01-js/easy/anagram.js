/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let res = false;
  if (/^a-zA-Z/.test(str1) || /^a-zA-Z/.test(str2)) {
    return false;
  }

  if (str1.length === str2.length) {
    for (let index = 0; index < str1.length; index++) {
      const char = str1[index].toLowerCase();
      if (!str2.toLowerCase().split("").includes(char)) {
        return false;
      }
    }
    res = true;
  }
  return res;
}

module.exports = isAnagram;
