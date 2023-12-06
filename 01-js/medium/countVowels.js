/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const regex = /[aeiou]/gi
  const res = str.match(regex)
  return res === null ? 0 : res.length
}

module.exports = countVowels;