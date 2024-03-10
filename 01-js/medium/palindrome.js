/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let temp=str.toLowerCase().split(/[ !?,.]+/).join('')
  let i = 0
  let j = temp.length - 1
  flag=true
  while(i<=j && flag===true){
    if(temp[i]!=temp[j]){
      flag=false
    }
    i++; j--
  }
  return flag;
}

module.exports = isPalindrome;
