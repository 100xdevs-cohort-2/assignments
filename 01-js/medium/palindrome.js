/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  let i=0;
  let j=str.length-1;
  while(i<j){
    if(str[i]===' '||str[j]===' '||str[i]<'a'||str[i]>'z'||str[j]<'a'||str[j]>'z'){
       if(str[i]===' '||str[i]<'a'||str[i]>'z'){
          i++;
       }
       else j--;
    }
    else{
    if(str[i]!==str[j]){
       return false;
    }
    i++;
    j--;
   }
  }
  return true;
}

module.exports = isPalindrome;
