/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase();
  let wovelCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  str.split('').forEach(function(char) {
    if (vowels.includes(char)) {
        wovelCount++;
    }
});
  return wovelCount;
}

module.exports = countVowels;