/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let check =0;
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g,"").split("").join()
  let n =cleaned.length
 for(let i=0; i<n; i++){
   if(cleaned[i]!= cleaned[n-1-i]){
    check=1;
    break;
   }
   else continue;
 }

if(check==1) return false;
 else return true;


  
}

module.exports = isPalindrome;
