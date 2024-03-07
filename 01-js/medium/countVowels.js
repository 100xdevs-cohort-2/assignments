/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let count = 0;
  for(let i = 0 ; i<str.length; i++) {
    if(isVowels(str.charAt(i)))
      count += 1;
  }
  return count;
}
function isVowels(c) {
 let char = c.toLowerCase();
 return char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u';
}
module.exports = countVowels;