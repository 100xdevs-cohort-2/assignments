/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let l = 0, r = str.length-1;
  while (l < r) {
    if(str[l] !== str[r]) {
      if((str[l] >= 'a' && str[l] <= 'z') && (str[r] >= 'a' && str[r] <= 'z')) {
        return false;
      }
      else if(str[l] <'a' || str[l] > 'z') {
        l++;
        continue;
      }
      else if(str[r] <'a' || str[r] > 'z') {
        r--;
        continue;
      }
    }
    l++;
    r--;
  }
  return true;
}

module.exports = isPalindrome;
