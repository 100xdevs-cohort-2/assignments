/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
  if (str.length < 2){
    return true;
  }
  const strdivisor = (str.length % 2 === 0) ? str.length/2 : (str.length-1)/2
  for(let i=0; i<strdivisor; i++){
    if (str[i] !== str[str.length  - 1 - i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
