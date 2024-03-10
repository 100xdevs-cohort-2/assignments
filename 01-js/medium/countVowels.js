/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowelsArr = []
  str = str.toLowerCase()

  for (let i = 0; i < str.length; i++) {
    const word = str[i]
    if (!vowelsArr.includes(word) && ["a", "e", "i", "o", "u"].includes(word)) {
      vowelsArr.push(word)
    }
  }
  
  return vowelsArr.length
}

module.exports = countVowels;