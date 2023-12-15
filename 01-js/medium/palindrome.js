/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase for case-insensitivity
  const lowerStr = str.toLowerCase();

  // Remove non-alphanumeric characters (optional, depending on your requirements)
  const alphanumericStr = lowerStr.replace(/[^a-z0-9]/g, '');

  // Compare the original and reversed strings
  const reversedStr = alphanumericStr.split('').reverse().join('');
  return alphanumericStr === reversedStr;
}

module.exports = isPalindrome;
