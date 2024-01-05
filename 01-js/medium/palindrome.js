/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let alphanumericString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  let start = 0;
  let end = alphanumericString.length - 1;

  // Handle the case of an empty string
  // if (alphanumericString.length === 0) {
  //   return true;
  // }

  while (start <= end) {
    if (alphanumericString[start] !== alphanumericString[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

module.exports = isPalindrome;
