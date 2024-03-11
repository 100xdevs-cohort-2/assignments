/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  // return true;
  str = str.replace(/[^a-z0-9]/g, '');

  // return str === str.split('').reverse().join('');
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false; // If characters don't match, it's not a palindrome
    }
  }
}

module.exports = isPalindrome;
