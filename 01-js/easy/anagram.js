/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let list1 = [...str1.toLowerCase()].sort()
  let list2 = [...str2.toLowerCase()].sort()
  // let list1 = str1.toLowerCase().split("").sort()
  // let list2 = str2.toLowerCase().split("").sort()
  return JSON.stringify(list1) == JSON.stringify(list2) ? true : false
}

module.exports = isAnagram;
