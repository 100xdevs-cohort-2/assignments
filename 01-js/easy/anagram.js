/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const isStr1 = str1 ==="anagrams";
  const isStr2 = str2 ==="anagrams";
  return {
    str1: isStr1,
    str2: isStr2
  }
}
console.log(isAnagram("story", "create"));

module.exports = isAnagram;
