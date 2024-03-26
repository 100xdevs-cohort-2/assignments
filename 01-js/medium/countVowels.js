/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let numberOfVov = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() == "a" ||
      str[i].toLowerCase() == "e" ||
      str[i].toLowerCase() == "i" ||
      str[i].toLowerCase() == "o" ||
      str[i].toLowerCase() == "u"
    ) {
      numberOfVov++;
    }
  }
  return numberOfVov;
}

module.exports = countVowels;
