/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
  const strArray = str.toLowerCase().split("");

  const vowels = ["a", "e", "i", "o", "u"];

  let totalVowels = 0;

  for (let i = 0; i < strArray.length; i++) {
    totalVowels += strArray.filter((el) => el === vowels[i]).length;
  }

  return totalVowels;
}

module.exports = countVowels;
