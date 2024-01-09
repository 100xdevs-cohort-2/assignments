/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  tempstr = str.toLowerCase().split(' ').join('').replace(/[^a-z0-9]/gi, '');
  let left = 0;
  let right = tempstr.length - 1;
  while(right>left){
    if(tempstr[left]!=tempstr[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
