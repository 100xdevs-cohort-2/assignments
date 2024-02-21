/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
   let charsToRemove = /[",.!?]/g;
   let orgStr = str.replace(charsToRemove, "").replaceAll(" ", "").toLowerCase();
   let newStr = orgStr.split("").reverse().join("");
   return newStr === orgStr;
}

module.exports = isPalindrome;
