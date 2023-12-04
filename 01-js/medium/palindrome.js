/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let isPal = true;
  str = str.toLowerCase();

  // Remove spaces and punctuation mark from string
  let toBeRemoved = '';

  for (let i = 0; i < str.length; i++){
    if (str[i] < 'a' || str[i] > 'z'){
      toBeRemoved += str[i];
    }
  }
  for (let i = 0; i < toBeRemoved.length; i++){
    str = str.replace(toBeRemoved[i], '');
  }
  // console.log(toBeRemoved);
  // console.log(str);
  
  // Checking palindrome
  let n = str.length;

  for (let i = 0, j = n-1; i < n/2 - 1; i++, j--){
    if (str[i] != str[j]){
      isPal = false;
      break;
    }
  }

  return isPal;
}

module.exports = isPalindrome;
