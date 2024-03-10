/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let res = true;
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  for(let i=0; i<normalizedStr.length; i++){
    if(normalizedStr.toLowerCase().charAt(i) !== normalizedStr.toLowerCase().charAt(normalizedStr.length -1 -i)) return false;
  }
  return res;
}

module.exports = isPalindrome;
