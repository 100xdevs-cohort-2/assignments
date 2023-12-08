/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlpha(char) {
  return (char <= 'z' && char >= 'a');
}

function isPalindrome(str) {
  const n= str.length;
  str = str.toLowerCase();
  let i=0,j=n-1;
  while (i<j) {
    let l = str[i];
    let r = str[j];

    while (!isAlpha(l)) {
      i++;
      l = str[i];
    }

    while (!isAlpha(r)) {
      j--;
      r = str[j];
    }
    // console.log(l)
    // console.log(r)
    if(l!==r){
      return false;
    }
    i++;
    j--;
  }
  return true;
}


module.exports = isPalindrome;
