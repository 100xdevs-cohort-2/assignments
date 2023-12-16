/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  let reverse = '';

  for (let i = cleanedStr.length - 1; i >= 0; i--) {
    reverse += cleanedStr[i];
  }

  return reverse === cleanedStr;
}

module.exports = isPalindrome;
