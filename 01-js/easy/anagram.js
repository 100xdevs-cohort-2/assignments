/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false

  const str1FreqMap = str1
    .split('')
    .map(char => char.toLowerCase())
    .reduce((acc, char) => {
      if (acc[char]) {
        acc[char] += 1
      } else {
        acc[char] = 1
      }

      return acc
    }, {})

  const str2FreqMap = str2
    .split('')
    .map(char => char.toLowerCase())
    .reduce((acc, char) => {
      if (acc[char]) {
        acc[char] += 1
      } else {
        acc[char] = 1
      }

      return acc
    }, {})




  for (let key in str1FreqMap) {
    if (str1FreqMap[key] !== str2FreqMap[key]) return false;
  }

  return true

}

module.exports = isAnagram;
