/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowerStr = str.toLowerCase();
  const cleanStr = lowerStr.replace(/[^a-z0-9]/g,'');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

module.exports = isPalindrome;


