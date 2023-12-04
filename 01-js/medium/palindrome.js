/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let i= 0, j= str.length - 1;
  while(i<=j){
    const a = str[i].toLowerCase();
    const b = str[j].toLowerCase();
    if(a<'a'||a>'z'){
      i++;
    }else if(b<'a'||b>'z'){
      j--;
    }else if(a!=b){
      return false;
    }else if(a==b){
      i++;j--;
    }
  }
  return true;
}

module.exports = isPalindrome;
