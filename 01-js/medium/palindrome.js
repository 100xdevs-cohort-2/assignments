/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  str = str.replace(/[.,?\/#!$%\^&\*;:{}=\-_`~()\s]/g, "");

  var reversedStr = [];
  for (let i = str.length-1; i >= 0; i--) {
    reversedStr.push(str[i].toLowerCase())
  }

  reversedStr = reversedStr.join('');

  if(str.toLowerCase() === reversedStr) {
    return true;
  } else {
    return false;
  } 
}

module.exports = isPalindrome;
