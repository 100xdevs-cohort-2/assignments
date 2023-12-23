/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.split(' ').join("");
  str = str.replace(/[^a-zA-Z ]/g, "");
  let lengthOfStr = str.length;
  for (let i = 0; i < parseInt(lengthOfStr/2); i++) {
    if (str[i] != str[lengthOfStr - i - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
