/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strI = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let i = 0;
  let j = strI.length - 1;

  while (i <= j) {
    // Skip spaces in the comparison
    while (strI.charAt(i) === ' ' && i <= j) {
      i++;
    }

    while (strI.charAt(j) === ' ' && i <= j) {
      j--;
    }

    if (strI.charAt(i) === strI.charAt(j)) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
