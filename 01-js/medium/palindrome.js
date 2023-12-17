/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let cleanStr = "";
  for (let i = 0; i < str.length; ++i) {
    let char = str[i];
    if (/^[a-z]$/.test(char)) cleanStr += char;
  }
  let i = 0,
    j = cleanStr.length - 1;
  while (i < j) {
    if (cleanStr[i] != cleanStr[j]) return false;
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
