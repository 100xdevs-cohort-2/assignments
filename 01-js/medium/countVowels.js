/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  const clearStr = str.replace(/\s/g, '').toLowerCase();
  const cSplit = clearStr.split('');
  let count = 0;
  cSplit.forEach(e => {
    if( e == 'a' || e == 'e' || e == 'i'|| e == 'o'|| e == 'u' ) {
      count++;
    }
  });
  return count;
}

module.exports = countVowels;