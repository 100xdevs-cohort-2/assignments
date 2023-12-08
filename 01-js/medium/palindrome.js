/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z]/g, "");
  const length = formattedStr.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (formattedStr[i] !== formattedStr[length - i - 1]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
