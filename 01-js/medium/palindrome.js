/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let string = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let s=0;
  let e=string.length-1;
  console.log(string);
  while(s<e){
    if(string[s]!=string[e])
      return false;
    s++;
    e--;
  }
  return true;
}

module.exports = isPalindrome;
