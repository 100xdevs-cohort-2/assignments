/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const s = str.toLowerCase().split(" ").join(" ");
  const v = ["a", "e", "i", "o", "u"];
  let c = 0;
  for (let i = 0; i < s.length; i++) {
    if (v.includes(s[i])) {
      c++;
    }
  }
  return c;
  // Your code here
}

module.exports = countVowels;
