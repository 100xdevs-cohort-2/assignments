/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let string = str.toLowerCase();
  const arrOfLetters = string.split("");

  let vowels = ["a", "e", "i", "o", "u"];

  let count = 0;

  for (let letter of arrOfLetters) {
    for (let vowel of vowels) {
      if (vowel.includes(letter)) {
        count += 1;
      }
    }
  }
  console.log(count);
  return count;
  // console.log(convert)
}

module.exports = countVowels;
