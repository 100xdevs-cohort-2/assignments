/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// solution 1

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^0-9a-zA-Z]/g, "");
  const revStr = str.split("").reverse().join("");
  return str === revStr;
}

// solution 2 - two pointers

// function isPalindrome(str) {
//   str = str.toLowerCase().replace(/[^0-9a-zA-Z]/g, "");
//   let left = 0;
//   let right = str.length - 1;
//   while (left <= right) {
//     if (str[left] !== str[right]) return false;
//     left++;
//     right--;
//   }
//   return true;
// }

module.exports = isPalindrome;
