/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length == 0 || str.length == 1) return true;
  str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  let i=0;
  let len = str.length-1;
  while(i<len){
    if(str.charAt(i) != str.charAt(len)){
      return false;
    }
    i++; len--;
  }
  return true;
}

module.exports = isPalindrome;
