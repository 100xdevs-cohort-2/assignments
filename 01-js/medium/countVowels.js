/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowels= new Set(['a','e','i','o','u']);
  let count=0;
  for (let i of str.toLowerCase()){
    if (vowels.has(i)){
      count+=1;
    }
  }
  return count;
    // Your code here
}

module.exports = countVowels;