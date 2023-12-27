/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str_param) {
  let str = str_param.replace(/[^\w\s]|_/g, "")
  if(str == "" || str.length == 1){
   return true
  } else { 
  let refinedStr = str.toLowerCase().replaceAll(" ","").split("").join("")
  let revStr = str.toLowerCase().replaceAll(" ","").split("").reverse().join("")
  if(refinedStr == revStr){
   return true;
  }
 }
  return false;
 }

module.exports = isPalindrome;
