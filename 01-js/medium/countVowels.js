/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const myVowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let count = 0;
  for (let char of str) {
    if (myVowel.includes(char)) {
      count++;
    }
  }
  return count;
  // Your code here
}

module.exports = countVowels;