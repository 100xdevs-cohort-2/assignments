/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  let reverseStr = '';

  for (let i = cleanedStr.length - 1; i >= 0; i--) {
   
    reverseStr += cleanedStr[i];
  }
  return cleanedStr  === reverseStr;
}

module.exports = isPalindrome;
