/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const reversed = str
    .split('')
    .reverse()
    .join('')
    .replaceAll(' ', '')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '');
  const formatted = str
    .toLowerCase()
    .replaceAll(' ', '')
    .replace(/[^a-zA-Z0-9]/g, '');
  return formatted === reversed;
}

module.exports = isPalindrome;
