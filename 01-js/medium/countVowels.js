/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let counter = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; ++i) {
    let char = str[i];
    if ("aeiou".includes(char)) counter++;
  }
  return counter;
}

module.exports = countVowels;
