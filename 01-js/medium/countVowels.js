/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.replace(/[^\w]/g, '').toLowerCase()

  let vowelsCount = 0;
  for(let letters of str) {
    if(letters == "a" || letters == "e" || letters == "i" || letters == "o" || letters == "u") {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

module.exports = countVowels;
