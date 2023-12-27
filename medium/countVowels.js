/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let strArr = str.toLowerCase().split("");
  let vowelsArr = ["a", "e", "i", "o", "u"];
  let res = 0;
  strArr.forEach((value) => {
    console.log(value, vowelsArr.indexOf(value));
    if (vowelsArr.indexOf(value) >= 0) {
      res += 1;
    }
  });
  return res;
}

module.exports = countVowels;
