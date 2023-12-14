/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let result = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let revertedString = "";

  for (let i = result.length - 1; i >= 0; i--) {
    revertedString += result[i];
  }

  if (result == revertedString) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
