/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let isPal = true;

  str = str.replace(/[^a-zA-Z0-9]/g, "");
  str = str.toLowerCase();
  let n = str.length;

  for (let i = 0; i < n / 2; i++) {
    if (str[i] != str[n - 1 - i]) {
      isPal = false;
      break;
    }
  }
  return isPal;
}

module.exports = isPalindrome;
