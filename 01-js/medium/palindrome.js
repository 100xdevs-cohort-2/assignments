/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let reversedStr = str.toLowerCase().split('').reverse()
  let originalStr = str.toLowerCase().split('');
  for (let i = 0; i < reversedStr.length; i++){
   if (reversedStr[i]!== originalStr[i]) {
     return false;
   }  }
  
  return true;
}

module.exports = isPalindrome;
