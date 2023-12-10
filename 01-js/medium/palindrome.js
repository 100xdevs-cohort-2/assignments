/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");

  var revStr = "";
  for (var i = 0; i < str.length; i++) {
    revStr = str[i] + revStr;
  }
  str = str.join("");

  return revStr == str;
}

module.exports = isPalindrome;
