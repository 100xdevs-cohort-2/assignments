/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let revstr = str.replace(/[\s\W]/g, '').toLowerCase();
  if (revstr === revstr.split('').reverse().join(''))
  {
    return true;
  }
  else
  {
    return false;
  }
}

module.exports = isPalindrome;
