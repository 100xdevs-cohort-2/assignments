/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let totalVowels = 0;
  let lowerString = str.toLowerCase();
  for (let i = 0; i < lowerString.length; i++) {
    let char = lowerString.charAt(i);
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      totalVowels++;
    }
  }
  return totalVowels;
}
module.exports = countVowels;
