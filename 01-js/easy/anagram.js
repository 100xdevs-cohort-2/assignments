/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if (str1.length != str2.length) {
    return false
  }

  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  let str1Array = str1.split('')

  str1Array.sort()

  str1 = str1Array.join('')

  let str2Array = str2.split('')

  str2Array.sort()

  str2 = str2Array.join('')

  return str1 === str2

}


module.exports = isAnagram;
