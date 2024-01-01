/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase();
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let countOfVowels = 0;

  for (let character of str) {
    if (vowels.has(character)) {
      countOfVowels++;
    }
  }

  return countOfVowels;
}

module.exports = countVowels;
