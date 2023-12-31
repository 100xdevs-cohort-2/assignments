/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g,'');
  let n = str.length;
  let mid  = Math.floor(n/2);
  let i = 0,j = n-1;
  while(i<mid && j>mid){
    if(str[i]!== str[j]){
      return false;
    }
    i += 1;
    j -= 1;
  }
  return true;


}

module.exports = isPalindrome;
