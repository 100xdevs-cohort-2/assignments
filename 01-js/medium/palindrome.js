/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strArr = str.toLowerCase().split('');
  let i = 0, j = strArr.length - 1;

  while (i <= j) {
    if (!isAlphaNumeric(strArr[i])) i++;
    else if (!isAlphaNumeric(strArr[j])) j--;
    else if (strArr[i] !== strArr[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }

  return true;
}

function isAlphaNumeric(str) {
  return (str >= 'a' && str <= 'z');
}

module.exports = isPalindrome;
