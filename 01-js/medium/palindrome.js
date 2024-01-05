/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str
    .toLowerCase()
    .replace(/ /g, "")
    .replace(/[^\w\s]/g, "");
  let len = str1.length;

  for (let i = 0; i < len; i++) {
    if (str1[i] != str1[len - i - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
