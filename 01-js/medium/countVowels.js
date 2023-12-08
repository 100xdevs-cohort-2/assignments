/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let totalVowelsCount = 0;
  const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };
  str
    .toLowerCase()
    .split("")
    .map((char) => {
      if (char in vowels) totalVowelsCount++;
    });

  return totalVowelsCount;
}

module.exports = countVowels;
