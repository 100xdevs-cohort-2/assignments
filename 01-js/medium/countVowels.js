/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  return str.split('').reduce((acc, current) => {
    if ((/[aeiou]/i).test(current)) {
      return acc + 1
    } else {
      return acc
    }
  }, 0)
}

module.exports = countVowels;