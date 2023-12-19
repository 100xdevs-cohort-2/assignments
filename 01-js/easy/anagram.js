/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.replace(/[^\w]/g, "").toLowerCase()
  str2 = str2.replace(/[^\w]/g, "").toLowerCase()

  //Get the character map of both strings
  const charMapA = getCharMap(str1)
  const charMapB = getCharMap(str2)

  /* Next, we loop through each character in the charMapA, 
  and check if it exists in charMapB and has the same value as
  in charMapA. If it does not, return false */
  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false
    }
  }

  return true
}

function getCharMap(string) {
  // We define an empty object that will hold the key - value pairs.
  let charMap = {}

  /*We loop through each character in the string. if the character 
  already exists in the map, increase the value, otherwise add it 
  to the map with a value of 1 */
  for (let char of string) {
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}

module.exports = isAnagram;
