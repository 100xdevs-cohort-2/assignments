/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const convertToLowerCase = str.toLowerCase();
  let count = 0;
  for (const vowelStr of convertToLowerCase) {
    if (
      vowelStr === "a" ||
      vowelStr === "e" ||
      vowelStr === "i" ||
      vowelStr === "o" ||
      vowelStr === "u"
    ) {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;
