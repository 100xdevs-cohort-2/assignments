/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length == 1) {
    return true;
  }
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let lastIndex = str.length - 1;

  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      if (!(str[i] == str[lastIndex])) {
        return false;
      }
      lastIndex--;
    }
  }
  return true;
}
module.exports = isPalindrome;
