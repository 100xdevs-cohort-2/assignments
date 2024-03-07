/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let sum = 0;
  var charArray = str.split("");
  charArray.forEach((i) => {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") sum++;
  });
  return sum;
}

module.exports = countVowels;
