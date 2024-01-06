/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length)
    return false

  str1 = str1.toLowerCase().replace(/\s/g, '')
  str2 = str2.toLowerCase().replace(/\s/g, '')

  const freqCounter1 = {}
  const freqCounter2 = {}


  for (const char of str1) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1
  }

  for (const char of str2) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1
  }

  for (const char in freqCounter1) {
    if (freqCounter1[char] !== freqCounter2[char]) {
      return false
    }
  }

  return true
}

module.exports = isAnagram;
