/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let formatStr = str.replace(/\s/g, "").toLowerCase();
  let charArray = formatStr.split("").sort();
  let count = 0;
  vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < charArray.length; i++) {
    const element = charArray[i];
    if (vowels.includes(element)) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
