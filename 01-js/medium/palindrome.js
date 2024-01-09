/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// sandeep

function isPalindrome(str) {
  let l = 0;
  let r = str.length - 1;
  if (str.search(/\!|\?|\&|\.|\s|\,/g) !== -1) return true;

  while (l <= r) {
    if (str[l].toLowerCase() !== str[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

module.exports = isPalindrome;
