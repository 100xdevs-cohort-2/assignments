/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  const lowercasedStr = str.toLowerCase();
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let vowelCount = 0;
  for (let i = 0; i < lowercasedStr.length; i++) {
    if (vowels.has(lowercasedStr[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}

const inputString = "Hello, World!";
const result = countVowels(inputString);
console.log(`Number of vowels: ${result}`);

module.exports = countVowels;
