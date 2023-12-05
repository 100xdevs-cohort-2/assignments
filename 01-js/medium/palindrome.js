/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^\w]/g, '').trim().toLowerCase();

  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] != str[right]) return false;
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
