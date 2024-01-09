/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^\w\s\']|_/g, "").replace(/\s/g,"").toLowerCase();   /* [^\w\s'] removes everythings that is not alphanumeric */

  let lo = 0;
  let hi = str.length - 1;
  while(lo <= hi)
  {
      if(str[lo] !== str[hi]) return false;
      lo++;
      hi--;
  }
  return true;
}

module.exports = isPalindrome;
