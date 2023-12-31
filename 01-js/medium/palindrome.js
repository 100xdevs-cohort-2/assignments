/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let len = str.length - 1;
  for (let index = 0; index <= len / 2; index++) {
    if(str.charAt(index) !== str.charAt(len - index)) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
