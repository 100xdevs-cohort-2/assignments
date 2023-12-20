/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  hm = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  str = str.toLowerCase();
  count = 0;
  for (const s of str) {
    if (hm.hasOwnProperty(s)) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
