/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z]/g, '');
   const n = str.length;
  let m =n-1,i=0;
   while(i<m){
     if(str[i]===str[m])
     {
       m--;
       i++;
     }
     else
     {
       return false;
     }
   }
  return true;
}

module.exports = isPalindrome;
