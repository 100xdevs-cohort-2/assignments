/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowels = {
      a: "a",
      e: "e",
      i: "i",
      o: "o",
      u: "u",
      A:"A",
      E:"E",
      I:"I",
      O:"O",
      U:"U"
    }
    let count = 0

for (let i = 0; i < str.length; i++) {
    if(str[i] in vowels) {
      count += 1
    }
}
return count
}

module.exports = countVowels;