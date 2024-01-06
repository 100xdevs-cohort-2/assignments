/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vow = ["a", "e", "i", "o", "u"];
  lowStr = str.toLowerCase().replaceAll(" ", "").split("");
  let vowelsArr = lowStr.filter((letter) => vow.includes(letter));
  return vowelsArr.length;
}

module.exports = countVowels;
