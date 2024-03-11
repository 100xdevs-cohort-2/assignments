const { isAlphanumeric } = require("../../utility/string");
/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

const isPalindrome = (str) => {
  let i = 0, j = str.length - 1;
  while (i < j) {
    let skipped = false;
    
    if (!isAlphanumeric(str[i])) {
      i++;
      skipped = true;
    }
    
    if (!isAlphanumeric(str[j])) {
      j--;
      skipped = true;
    }

    if (skipped) continue;

    if (str[i].toLowerCase() !== str[j].toLowerCase()) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

module.exports = isPalindrome;
