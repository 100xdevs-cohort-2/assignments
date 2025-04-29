/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1= str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let str2 = str.toLowerCase().split("").reverse().join("").replace(/[^a-z0-9]/g, "");
  if(str1 == str2){
  return true;
  }
  else{
    return false;
  }
}

module.exports = isPalindrome;
