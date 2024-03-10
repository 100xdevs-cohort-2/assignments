/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Using regular expression to remove  whitespace and puntchuation
  let regex = /[.,\/#!$%\^&\*;:{}?=\-_`~()\s]/g;
  str = str.replace(regex, "");
  let arr = str.toLowerCase().split("");
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (!(arr[i] === arr[j])) {
      return false;
    }
    i = i + 1;
    j = j - 1;
  }
  return true;
}

module.exports = isPalindrome;
