/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const str1 = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reverseStr = str1.split("").reverse().join("");
  return str1 === reverseStr;
}

module.exports = isPalindrome;
