/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Removing non-aplhanumeric and convert to lowerCase
  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  // Reversing the string to check whether it is palindrome
  const reverseStr = cleanedStr.split('').reverse().join('');
  return reverseStr === cleanedStr;
}

module.exports = isPalindrome;
