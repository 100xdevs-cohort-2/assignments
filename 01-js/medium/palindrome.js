/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const str1 = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let i=0;
  let j=str1.length-1;

  while(i<=j){
    if(str1[i]!==str1[j]){
      return false;
    }
    i+=1;
    j-=1;
  }
  return true;
}

module.exports = isPalindrome;
