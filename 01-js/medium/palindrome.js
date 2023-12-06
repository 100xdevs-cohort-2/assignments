/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const mString = cleanString(str)
  const n = mString.length;
  if (n == 0) return true;
  return recursivePalindrome(mString, 0, n - 1);
}

function recursivePalindrome(str, start, end) {
  if (start == end) return true;
  if (str.charAt(start) != str.charAt(end)) return false;
  if (start < end) return recursivePalindrome(str, start + 1, end - 1)
  return true;
}
function cleanString(str) {
  let res = str.toLowerCase();
  return res.replace(/[\s!?.,;]/g, '')
}
console.log(isPalindrome('Eva, can I see bees in a cave?'));
module.exports = isPalindrome;
