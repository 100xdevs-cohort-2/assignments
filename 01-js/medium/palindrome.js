/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    while ((str[left] < "a" || str[left] > "z") && left < right) left++;
    while ((str[right] < "a" || str[right] > "z") && left < right) right--;

    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

module.exports = isPalindrome;
