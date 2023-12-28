/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let ucStr = str.toUpperCase();
  let count = 0;
  for (let i = 0; i < ucStr.length; i++) {
    if (
      ucStr[i] == "A" ||
      ucStr[i] == "E" ||
      ucStr[i] == "I" ||
      ucStr[i] == "O" ||
      ucStr[i] == "U"
    ) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
