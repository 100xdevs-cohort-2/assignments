/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  if (str.length === 0) {
    return 0;
  }
  let vowelCount = 0;

  const newStr = str.toLowerCase();

  for (let i = 0; i < newStr.length; i++) {
    if (isVowel(newStr[i])) {
      vowelCount++;
    }
  }

  function isVowel(ch) {
    return ch === "a" || ch === "e" || ch === "o" || ch === "i" || ch === "u";
  }

  return vowelCount;
}

console.log(countVowels("heyThere"));

module.exports = countVowels;
