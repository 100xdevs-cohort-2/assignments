/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let l = 0, r = str.length - 1; 
  str = str.toLowerCase();

  while(l <= r) {
    while(str[l] < 'a' || str[l] > 'z') l++;
    while(str[r] < 'a' || str[r] > 'z') r--;

    if(str[l] !== str[r]) return false;
    l++; 
    r--;
  }

  return true;
}

module.exports = isPalindrome;
