/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    const newString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let start = 0;
    let end = newString.length - 1;
    while(start <= end) {
      if(newString[start] !== newString[end]) {
        return false;
      } else {
        start++;
        end--;
      }
    }
    return true;
  }
  
  module.exports = isPalindrome;