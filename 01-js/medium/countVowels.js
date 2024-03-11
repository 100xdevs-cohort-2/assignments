/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // logic: just use a loop to iterate through the string make
  // a list of the vowels, check if each letter of the string matches
  // the vowels list, if it does inrease count by 1.
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (["a", "e", "i", "o", "u"].indexOf(str[i].toLowerCase()) !== -1) {
      res += 1;
    }
  }
  return res;
}

module.exports = countVowels;