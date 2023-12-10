/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowels = new Array("a", "e", "i", "o", "u");
  let strArr = str.split("");
  let vowelsCount = 0;
  // Approach 1
  for (let i = 0; i < strArr.length; i++) {
    if (vowels.includes(strArr[i].toLowerCase())) vowelsCount++;
  }
  // Approach 2
  // for (let i = 0; i < strArr.length; i++) {
  //   vowels.some((vowel) => {
  //     if (strArr[i].toLowerCase() === vowel) vowelsCount++;
  //   });
  // }

  return vowelsCount;
}

module.exports = countVowels;
