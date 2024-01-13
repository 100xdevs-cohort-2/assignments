/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let n=str.length;
  let arr=[];
  //adding only character in an array
  for(let i=0;i<n;i++){
    if(str[i].toLowerCase()>='a' && str[i].toLowerCase()<='z'){
      arr.push(str[i].toLowerCase());
    }
  }

  let arrLength=arr.length;
//checking palindrome in newly array
  for(let i=0;i<arrLength/2;i++){
    if(arr[i]!=arr[arrLength-i-1]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
