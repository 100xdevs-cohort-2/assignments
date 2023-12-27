/*
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
*/
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
 
  return true; 
}

module.exports = isPalindrome;
