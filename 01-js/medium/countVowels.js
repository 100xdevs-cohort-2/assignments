/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let totalVow = 0;
  const vow = new Set(['a', 'e', 'i', 'o', 'u']);
  let lowerStr = str.toLowerCase();
  for(let char of lowerStr){
    if(vow.has(char)){
      totalVow++;
    }
  }
  return totalVow;
}

module.exports = countVowels;