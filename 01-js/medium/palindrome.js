/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  //We repalces special symboll or spaces with emty sring 
  let newstr = str.replace(/[^a-zA-Z0-9]/g, "");
  let reverseStr = newstr.split("").reverse().join("");
  return newstr.toLowerCase()===reverseStr.toLowerCase();
}

module.exports = isPalindrome;
