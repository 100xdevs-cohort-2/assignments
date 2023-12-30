/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let reversedStr = "";
  for (let i = 0; i < str.split("").length; i++) {
    reversedStr += str[str.length - 1 - i];
  }
  if (
    str.replace(/ /g, "").toLowerCase() ===
    reversedStr.replace(/ /g, "").toLowerCase()
  ) return true;
  return false;
}

module.exports = isPalindrome;
