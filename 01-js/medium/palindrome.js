/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  str= str.replace(/[! , ? .]/g,'').toLowerCase();
  
  for(let i=0; i<str.length; i++){
    if(str.length ==0 )
    {
      return false;
    }
    if(str.length%2!=0)
    {
      if(str[i]!=str[str.length-i-1])
      {
        return false;
      }
    } 
    else{
      if(str[i]!=str[str.length-i-1])
      {
        return false;
      }
    }
  }
  return true;
}

module.exports = isPalindrome;
