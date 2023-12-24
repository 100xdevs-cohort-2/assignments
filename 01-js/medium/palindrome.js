/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.split('').filter(char => /[a-z]/.test(char)).join('')
  let strLength = str.length;
  for(let i = 0;i<strLength/2;i++){
    if(str[i] !== str[strLength-i-1])
      return false;
  }
  return true;
}

module.exports = isPalindrome;
