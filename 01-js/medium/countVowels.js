/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  const splittedArray = str.toLowerCase().split("");
  for (let i = 0; i < splittedArray.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(splittedArray[i])) count++;
  }

  return count;
}
module.exports = countVowels;
