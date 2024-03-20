/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Remove spaces and punctuation, and convert to lower case
  let cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
  let length = cleanedStr.length;
  for(let i = 0; i < length / 2; i++) {
    if(cleanedStr[i] !== cleanedStr[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;


