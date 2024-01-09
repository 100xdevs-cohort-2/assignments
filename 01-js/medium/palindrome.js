/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let res = str.toLowerCase();
  const regx = /[\s?.,;:!]/g;
  let res1 = res.replace(regx, '');
  return recursive(res1, 0);
}
function recursive(str, i) {
  if (i >= str.length / 2) return true;
  if (str.charAt(i) != str.charAt(str.length - i - 1)) return false;
  return recursive(str, i + 1);
}
console.log(recursive('abcba', 0));

module.exports = isPalindrome;
