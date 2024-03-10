/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let newStr = str.toLowerCase();
  let newerStr = "";

  for(let i = 0; i < newStr.length; i++){
    if(newStr[i] >= 'a' && newStr[i] <= 'z'){
      newerStr += newStr[i];
    }
  }

  let i = 0;
  let j = newerStr.length - 1;

  while(i < j){
    if(newerStr[i] !== newerStr[j]) return false;
    i++;
    j--;
  }

  return true;
}

module.exports = isPalindrome;
