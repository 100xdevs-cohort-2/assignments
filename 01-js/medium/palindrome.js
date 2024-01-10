/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z+]/g, '').trim().toLowerCase();
  stpointer=0;
  lspointer = str.length-1;
  while (stpointer <= lspointer){
    if(str[stpointer]===str[lspointer]){
      stpointer++;
      lspointer--;
    }
    else {
      console.log(false)
      return false;}
  }
  console.log(true)

  return true;

}
module.exports = isPalindrome;
