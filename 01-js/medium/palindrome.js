/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[ !.?,]/g,"");
  let rstr = str.split('').reverse().join('');
  if(str==rstr){
    return true;
  }
  return false;
}
// console.log(isPalindrome("race car"))

module.exports = isPalindrome;
