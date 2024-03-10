/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const regex = /\s/g;
  const regex2 = /[^a-zA-Z0-9]/g;
  const str1=str.toLowerCase().replace(regex,"").replace(regex2,"");
  const str2=str.toLowerCase().replace(regex, "").replace(regex2,"").split('').reverse().join('')
  if(str1==str2){

    return true;
  }else{
    return false;
  }
}

module.exports = isPalindrome;
