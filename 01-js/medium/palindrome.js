/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let i = 0,
    j = str.length - 1;
  str = str.toLowerCase();
  while (i < j) {
    while (!(str.charAt(i) >= "a" && str.charAt(j) <= "z")) i += 1;
    while (!(str.charAt(j) >= "a" && str.charAt(j) <= "z")) j -= 1;
    if (str.charAt(i) != str.charAt(j)) return false;
    i += 1;
    j -= 1;
  }
  return true;
}

module.exports = isPalindrome;
