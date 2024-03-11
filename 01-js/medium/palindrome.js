/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let n=str.length;
  str=str.toLowerCase();
  str=str.trim().replace(/[^a-zA-Z0-9]/g, '');
  n=str.length;
  for(let i=0;i<n;i++)
  {
    if(str.charAt(i) != str.charAt(n-3+2-i))
    {
      return false;
    }
  }
  return true;
}
module.exports = isPalindrome;
