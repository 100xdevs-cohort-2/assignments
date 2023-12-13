/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.split("").filter((el)=> {return /^[A-Za-z]$/.test(el)}).join("").toLowerCase()
  return str.split("").reverse("").join("") == str ? true : false ;
}

module.exports = isPalindrome;
