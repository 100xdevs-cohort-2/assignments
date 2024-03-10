/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  // Your code here

  let finalCount = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  let inputInLowerCase = str.toLowerCase();

  let totalVowelsCount = 0;

  for (let i = 0; i < inputInLowerCase.length; i++) {
    let letter = inputInLowerCase[i];

    if (finalCount.hasOwnProperty(letter)) {
      finalCount[letter] += 1;
    }
  }
  for (let [key, value] of Object.entries(finalCount)) {
    totalVowelsCount += value;
  }

  return totalVowelsCount;
}

module.exports = countVowels;
