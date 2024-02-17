/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const str2=str.split('').reverse().join('')
  if(str2===str){

    console.log("true");
    return true;

  }


  else{
    console.log("false");

    return false;
  }
}
isPalindrome("abcba")
module.exports = isPalindrome;
