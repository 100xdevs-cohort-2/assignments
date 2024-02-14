/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let st=0;
    let end=str.length-1;
    while(st<=end){
      if(str[st]!=str[end]){
        return false;
      }
       st++;
       end--;
    }
    return true;

}

// console.log(isPalindrome("nitin"));

module.exports = isPalindrome;
