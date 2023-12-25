/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let i = 0;
  let j = s.length - 1;

  while(i<j){
    if(s[i] !== s[j]){
      return false;
    }else{
      i++;
      j--;
    }
  }
  return true;
}

module.exports = isPalindrome;

