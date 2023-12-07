/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let s1 = str1.toLowerCase().split('').sort()
  let s2 = str2.toLowerCase().split('').sort()
  return s1.every((e,i) => e===s2[i])

}

module.exports = isAnagram;

console.log(isAnagram("ok","kd"));
