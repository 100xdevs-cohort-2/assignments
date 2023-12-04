/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowels = ['a','e','i','o','u'];
  let s = str.toLowerCase();
  let count = 0
  for(let i=0; i<s.length; i++){
    if (vowels.includes(s[i])){
      count = count + 1;
    }
  }
  return count;
}

module.exports = countVowels;