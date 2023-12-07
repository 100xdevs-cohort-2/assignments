/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowelsCount = 0;
  const charactersArray = str.toLowerCase().split("");
  let vowels = ["a", "e", "i", "o", "u"];
  charactersArray.forEach((character) => {
    vowels.forEach((vowel) => {
      if (vowel === character) {
        vowelsCount += 1;
      }
    });
  });
  console.log(vowelsCount)
  return vowelsCount;
}

module.exports = countVowels;
