/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let s1 = str;
  s1 = s1.toLowerCase().split("");

  let ctr = 0;

  vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (s1[i] == vowels[j]) {
        ctr++;
      }
    }
  }
  return ctr;
}

module.exports = countVowels;
