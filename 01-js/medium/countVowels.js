/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let result = str.replace(/\s+/g, "").trim().toLowerCase();
  let counter = 0;
  for (let i = 0; i < result.length; i++) {
    switch (result[i]) {
      case "a":
      case "A":
      case "e":
      case "E":
      case "i":
      case "I":
      case "o":
      case "O":
      case "u":
      case "U":
      case "v":
      case "V":
        counter++;
        break;

      default:
        break;
    }
  }
  return counter;
}

module.exports = countVowels;