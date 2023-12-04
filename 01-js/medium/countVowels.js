/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  if (!str)
    return 0
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  str.toLowerCase().split('').forEach(c => {
    if (vowels.includes(c))
      count++

  });
  return count;
}

module.exports = countVowels;
