/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let finalString = str.toLowerCase();
  let n = finalString.length;
  let lowerString = "";
  for(let i = 0; i < n; i++) {
    let char = finalString.charAt(i);
    if(char.charCodeAt(0) >= 96 && char.charCodeAt(0) <= 122) {
      lowerString += char;
    }
  }
  for(let i = 0; i < (lowerString.length / 2); i++) {
    if(lowerString.charAt(i) !== lowerString.charAt(lowerString.length - 1 - i)) {
      return false;
    }
  }
  return true;
}
module.exports = isPalindrome;
