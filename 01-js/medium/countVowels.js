/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toLowerCase() == 'a' || str.charAt(i).toLowerCase() == 'e' || str.charAt(i).toLowerCase() == 'i' || str.charAt(i).toLowerCase() == 'o' || str.charAt(i).toLowerCase() == 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
}

let a = "ashrafeiou";

console.log(countVowels(a));

module.exports = countVowels;