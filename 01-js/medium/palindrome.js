/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length<=1){
    return true;
  }
 let str1=str.replace(/[^\w\s]/g, '');
  if(str1.toLowerCase().split(" ").join("") === str1.toLowerCase().split("").reverse().join(" ").split(" ").join("")){
    return true;
  }
  return false;
}

module.exports = isPalindrome;
