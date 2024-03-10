/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strArr = str
    .toUpperCase()
    .replaceAll(" ", "")
    .replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
    .split("");
  let start = 0;
  let end = strArr.length - 1;
  while (start < end) {
    if (strArr[start] != strArr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
