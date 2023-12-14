/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    var cnt =0 ;
    str = str.toUpperCase();
    for (let i = 0; i < str.length; i++) {
      if(str.charAt(i) === 'A' || str.charAt(i) === 'E' || str.charAt(i) === 'I' || str.charAt(i) === 'O' || str.charAt(i) === 'U') {
        cnt++;
      }
    }
    return cnt;
}

module.exports = countVowels;