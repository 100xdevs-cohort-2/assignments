/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const forwardString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reverseString = str.toLowerCase().split('').reverse().join().replace(/[^a-z0-9]/g, '')
  return forwardString === reverseString
}

module.exports = isPalindrome;
