/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(inputString) {
  const cleanedString = inputString.replace(/[,. ]/g, '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const length = cleanedString.length;
  const mid = Math.floor(length / 2);

  for (let i = 0; i < mid; i++) {
      if (cleanedString[i] !== cleanedString[length - 1 - i]) {
          return false;
      }
  }
  return true;
}

module.exports = isPalindrome;
