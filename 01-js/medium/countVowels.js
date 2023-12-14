/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const newStr = str.toLowerCase();
  let count = 0;
  for (let index = 0; index < newStr.length; index++) {
    if (
      newStr[index] == "a" ||
      newStr[index] == "e" ||
      newStr[index] == "i" ||
      newStr[index] == "o" ||
      newStr[index] == "u"
    ) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;