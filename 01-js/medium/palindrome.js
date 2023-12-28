/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  let str1 = "";
  for (let i = 0; i < str.length; i++) {
    // if the current character is an alphabet
    if (/[a-zA-Z]/.test(str[i])) {
      str1 += str[i];
    }
  }
  let i = 0,
    j = str1.length - 1;
  str1 = str1.toLowerCase();
  while (i <= j) {
    if (str1[i] !== str1[j]) {
      return false;
    }
    i += 1;
    j -= 1;
  }
  return true;
}

module.exports = isPalindrome;
