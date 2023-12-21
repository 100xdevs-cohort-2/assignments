/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.replaceAll(" ","").replaceAll(/[.,\/#!$%\^&\?*;:{}=\-_`~()]/g,"") ;
  for(let i =0;i<str.length/2;i++){
    if (str[i].toLowerCase() !==str[str.length-i-1].toLowerCase() ){
      return false;
    };
   
  }
  return true;
}
console.log(isPalindrome("[}}!="));
 
module.exports = isPalindrome;
