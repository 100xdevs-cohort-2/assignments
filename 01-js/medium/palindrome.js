/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  str=str.toLowerCase();

  let i=0;
  let j=str.length;
  while(i<j){
    if((str[i]>='a' && str[i]<='z') && (str[j]>='a' && str[j]<='z') && str[i]!=str[j]){
      return false;
    }else if(!(str[i]>='a' && str[i]<='z')){
      i++;
      continue;
    }else if(!(str[j]>='a' && str[j]<='z')){
      j--;
      continue;
    }
    i++;
    j--;
  }

  return true;
}

module.exports = isPalindrome;
