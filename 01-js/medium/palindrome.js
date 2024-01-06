/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) {
    return true;
  }

  const newStr = str
    .replace(/[^\w\s\']|_/g, "")
    .replace(/\s/g, "")
    .toLowerCase();
  const len = newStr.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (newStr[i] !== newStr[len - i - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
