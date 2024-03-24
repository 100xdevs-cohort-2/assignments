/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //filtering the string
  let filStr = str.toLowerCase().split('').filter((item)=>{
    return item.match(/[0-9a-z]/);
  });
  //reversing the string
  let revStr = [];
  for(let i=filStr.length-1; i>-1;i--) {
      revStr.push(filStr[i]);
  }
  //comparing two strings
  return (filStr.join('')===revStr.join(''));  
}

module.exports = isPalindrome;
