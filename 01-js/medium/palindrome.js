/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let isPalindrme = true;
  str = str.replace(/[!.,?:;\/() _-]/g, '').toLowerCase();
  for(let i = 0; i < str.length/2; i++){
    if(str[i] != str[str.length - 1 - i]){
      isPalindrme = false;
    }
  }
  return isPalindrme;
}

module.exports = isPalindrome;
