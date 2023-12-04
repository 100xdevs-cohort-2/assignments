/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '') === str.toLowerCase().split('').reverse().join().replace(/[^a-z0-9]/g, '')
}

module.exports = isPalindrome;
