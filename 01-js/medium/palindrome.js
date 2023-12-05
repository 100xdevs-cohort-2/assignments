/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length === 1 || str.length === 0) return true;
  let tempStr = str.toLowerCase().replace(/[.,!?]/g, '').replace(/ /g, '');
  for (let i = 0; i < str.length; i++) {
    if (tempStr.charAt(i) !== tempStr.charAt(tempStr.length - 1 - i)) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
