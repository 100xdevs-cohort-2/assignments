/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  //strForward = str.replaceAll(" ","").replaceAll(/[\W_]/,"").toLowerCase().split("");
  strForward = str.replaceAll(" ", "").replaceAll(/[\W_]/g, "").toLowerCase().split("");

  let length = strForward.length;
  for(let i = 0; i < length; i++){
    if(strForward[i] != strForward[length-1-i]){
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
