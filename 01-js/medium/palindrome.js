/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanStr = str.replace(/[^\w]/g, '').toLowerCase();
   
  for (let index = 0; index < cleanStr.length; index++) {
    if(cleanStr[index]!=cleanStr[cleanStr.length-1-index]){
      return false;
      
    } 
  }
  return true;
}

module.exports = isPalindrome;
