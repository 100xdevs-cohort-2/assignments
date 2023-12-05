/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let count = 0;
  str = str.toLowerCase();
  let hashSet = new Set();

  // Adding elements to the HashSet
  hashSet.add("a");
  hashSet.add("e");
  hashSet.add("i");
  hashSet.add("o");
  hashSet.add("u");

  for (let index = 0; index < str.length; index++) {
    if (hashSet.has(str.charAt(index))) {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;