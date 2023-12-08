/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[ ,.!?]/g, '')
  reverseString =  str.split('').reverse().join('');
  
  //reverseString.replace(/\s/g, '')
  //console.log("STR: ", str)
  //console.log(reverseString)

  if(str == reverseString){
    return true;
  }
  return false;
}

module.exports = isPalindrome;
