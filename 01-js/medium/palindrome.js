/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let strArr=[];

  for (let i = 0; i <str.length; i++) {
    // removes any punctuations or spaces and pushes each character to an array
    if((str[i]>="a"&&str[i]<="z")||(str[i]>="A"&&str[i]<="Z")){
      strArr.push(str[i])
    }
  }

  for (let i = 0; i <strArr.length / 2; i++) {
    // palindrome check
    if (strArr[i] != strArr[strArr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
module.exports = isPalindrome;
