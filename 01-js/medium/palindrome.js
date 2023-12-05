/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  if(str.trim() === "" || str.length === 1 || str.includes(" ")){
    return true
  }

  str = str.toLowerCase();
  let reverseString = "";

  let temp = [];
  for(let i=str.length; i>=0; i--){
    temp.push(str[i]);
  }

  reverseString = temp.join("");

  if(str === reverseString){
    return true
  }

  return false
}

module.exports = isPalindrome;
