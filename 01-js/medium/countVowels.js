/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let cleanedStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < cleanedStr.length; i++) {
      let Ele = cleanedStr[i];
      if (
          Ele == "a" ||
          Ele == "e" ||
          Ele == "i" ||
          Ele == "o" ||
          Ele == "u"
      ) {
          count++;
      }
  }
  return count;
}

module.exports = countVowels;