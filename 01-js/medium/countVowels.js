/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const strToArray = str.toLowerCase().split("");
  const vowelsCount = strToArray.reduce((vowelsCount, curr) => {
    if (vowels.includes(curr)) {
      vowelsCount++;
    }
    return vowelsCount;
  }, 0);
  return vowelsCount;
}

module.exports = countVowels;
