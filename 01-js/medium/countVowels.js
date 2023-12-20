/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here

  let vovels = new Set();
  vovels.add("a");
  vovels.add("e");
  vovels.add("i");
  vovels.add("o");
  vovels.add("u");

  let numberOfVovels = 0;

  strLower = str.toLowerCase();

  for (let i = 0; i < strLower.length; i++) {
    if (vovels.has(strLower[i])) {
      numberOfVovels++;
    }
  }

  return numberOfVovels;
}

module.exports = countVowels;
