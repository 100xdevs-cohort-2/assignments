/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let res;
  let str_caseinsenstive=str.toLowerCase().replace(/\W/g,'');
  let str_len=str_caseinsenstive.length;
  for(let i=0;i<str_caseinsenstive.length/2 ;i++)
  {
    if(str_caseinsenstive[i]!=str_caseinsenstive[str_len-i-1])
      return false;
  }
  return true;
}

module.exports = isPalindrome;
