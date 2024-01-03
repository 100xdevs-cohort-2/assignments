/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanedUpString = str.replace(/[^\w]|_/g,'').toLowerCase();
  const reversedString = cleanedUpString.split('').reverse().join('');
  
  return cleanedUpString === reversedString;
}

module.exports = isPalindrome;
