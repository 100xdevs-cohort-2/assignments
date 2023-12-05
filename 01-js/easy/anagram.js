/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false

  let count1 = new Array(26).fill(0)
  let count2 = new Array(26).fill(0)

  for (let i = 0; i < str1.length; i++)
    count1[str1[i].toLowerCase().charCodeAt() - "a".charCodeAt()]++
  for (let i = 0; i < str2.length; i++)
    count2[str2[i].toLowerCase().charCodeAt() - "a".charCodeAt()]++

  for (let i = 0; i < 26; i++) if (count1[i] !== count2[i]) return false
  return true
}

console.log(isAnagram("spar", "rasp"))

module.exports = isAnagram
