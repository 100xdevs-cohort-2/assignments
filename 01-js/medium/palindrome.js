/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  // Remove Special characters and convert string to lowercase
  let strLoweCase = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  //Reverse the string
  let strReverse = strLoweCase.split('').reverse().join('');
 
  if(strLoweCase === strReverse){
    return true;
  } else{
    return false;
  }
}

module.exports = isPalindrome;
