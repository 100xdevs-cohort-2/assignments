/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let ucStr = str.toUpperCase();
  let strLength = ucStr.length;
  let i = 0;
  let lastIndex = strLength - 1;
  while (i < strLength / 2) {
    if (i > lastIndex) {
      break;
    }
    if (ucStr.charCodeAt(i) < 65 || ucStr.charCodeAt(i) > 90) {
      i++;
      continue;
    }
    if (ucStr.charCodeAt(lastIndex) < 65 || ucStr.charCodeAt(lastIndex) > 90) {
      lastIndex--;
      continue;
    }
    if (ucStr[i] != ucStr[lastIndex]) {
      return false;
    }
    i++;
    lastIndex--;
  }
  return true;
}

module.exports = isPalindrome;
