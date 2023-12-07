/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str1withoutSpace = str1.replace(/\s/g,'').toLowerCase()
  let str2withoutSpace = str2.replace(/\s/g,'').toLowerCase()
  let sortedStr1 = str1withoutSpace.split('').sort().join('')
  let sortedStr2 = str2withoutSpace.split('').sort().join('')
  return sortedStr1 == sortedStr2
}

module.exports = isAnagram;
