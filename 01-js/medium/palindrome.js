/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let modifiedStrArr = str.toLowerCase().split("");
  let i = 0,
    j = modifiedStrArr.length - 1;
  while (i <= j) {
    if (!isAlphaNumeric(modifiedStrArr[i])) i++;
    else if (!isAlphaNumeric(modifiedStrArr[j])) j--;
    // here both starting and ending is alphanumeric char so we can check
    else if (modifiedStrArr[j] !== modifiedStrArr[i]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
}

function isAlphaNumeric(strChar) {
  if (strChar >= "a" && "z" >= strChar) {
    return true;
  }
  return false;
}

module.exports = isPalindrome;
