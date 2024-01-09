/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/g, '');
  str = str.replace(/\s/g, "");
  str = str.split('').join();
  return str == str.split('').reverse().join('');
}

module.exports = isPalindrome;
