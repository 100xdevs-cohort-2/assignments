/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let charMap = new Map()
  for (const c of str1) {
    let charFreq = charMap.get(c.toLowerCase())
    charMap.set(c.toLowerCase(), (charFreq ?? 0) + 1)
  }

  for (const c of str2) {
    let charFreq = charMap.get(c.toLowerCase())
    if (charFreq === undefined || charFreq === 0) {
      return false
    }
    charMap.set(c.toLowerCase(), charFreq - 1)
  }

  for (const c of charMap.keys()) {
    if (charMap.get(c) !== 0) {
      return false
    }
  }
  return true

}

module.exports = isAnagram;
