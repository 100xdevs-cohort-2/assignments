/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  var l = str.length - 1;
  var s = 0;
  while (l >= 0 && s < str.length) {
    while (
      str[s] == " " ||
      str[s] == "?" ||
      str[s] == "!" ||
      str[s] == "," ||
      str[s] == "."
    ) {
      s++;
    }
    while (
      str[l] == " " ||
      str[l] == "?" ||
      str[l] == "!" ||
      str[l] == "," ||
      str[l] == "."
    ) {
      l--;
    }
    if (str[s] != str[l]) {
      return false;
    }
    s++;
    l--;
  }
  return true;
}

module.exports = isPalindrome;
