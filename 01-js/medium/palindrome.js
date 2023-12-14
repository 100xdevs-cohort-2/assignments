/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str2 = str.toLowerCase().split("");
  let len = str.length;
  let ctr = 0;
  let arr=[];
  for (var i = 0; i < len; i++) {
    if(str2[i] >= 'a' && str2[i] <= 'z'){
      arr[ctr++] = str2[i];
    }
  }
  len = arr.length;
  for (var i = 0; i < len/2; i++) {
    if(arr[i] != arr[len-i-1])
      return false;
  }

  return true;
}

module.exports = isPalindrome;
