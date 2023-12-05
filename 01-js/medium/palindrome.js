/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let start = 0,
    end = str.length - 1;

  const punctuationMark = ["?", ".", "!", ",", " "];

  str = str.toLowerCase();

  while (start < end) {
    while (punctuationMark.includes(str[end])) end--;
    while (punctuationMark.includes(str[start])) start++;
    if (str[start++] !== str[end--]) return false;
  }

  return true;
}

module.exports = isPalindrome;
