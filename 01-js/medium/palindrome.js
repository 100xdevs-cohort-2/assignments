/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()\s]/g, "").toLowerCase();
  let s1 = str.split('');
  let n = s1.length;
  for(let i = 0; i <= n/2; i++){
    if(s1[i] != s1[n-i-1])return false;
  }
  return true;
}
isPalindrome('Able, was I ere I saw Elba!');
module.exports = isPalindrome;
