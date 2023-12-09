/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  const new_str = str.toLowerCase()
  let count = 0;
  for (let i = 0; i < new_str.length; i++) {
    if (
      new_str[i] == "a" ||
      new_str[i] == "e" ||
      new_str[i] == "i" ||
      new_str[i] == "o" ||
      new_str[i] == "u") {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;