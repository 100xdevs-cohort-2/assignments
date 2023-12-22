/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase
  let lowercaseStr = str.toLowerCase();

  // Remove non-alphanumeric characters
  let cleanStr = lowercaseStr.replace(/[^a-z0-9]/g, '');

  // Check if it's a palindrome
  let length = cleanStr.length;
  for (let i = 0; i < length / 2; i++) {
    if (cleanStr[i] !== cleanStr[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
