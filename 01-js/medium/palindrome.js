/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let modifiedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('');

  let start = 0;
  let end = modifiedStr.length-1;

  while(start<=end){
    if(modifiedStr[start]!== modifiedStr[end]){
      return false;
    }

    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
