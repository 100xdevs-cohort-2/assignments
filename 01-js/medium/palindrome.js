/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let n = str.length;
  str = str.toLowerCase();
  let newStr = "";
  let revStr = "";
  for (let i = 0; i < n; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      newStr += str[i];
    }
  }
  let len = newStr.length;
  for (let i = 0; i < newStr.length; i++) {
    revStr += newStr[len - i - 1];
  }
  return newStr == revStr;
}

module.exports = isPalindrome;
