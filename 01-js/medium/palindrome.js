/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[.,\/#?!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, "").toLowerCase();
  reversedStr = str.split("").reverse().join("");
  return (str === reversedStr);
}

module.exports = isPalindrome;

isPalindrome('Eva, can I see bees in a cave.?');