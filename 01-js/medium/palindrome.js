/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase(); 

  var n = 0;
  var m = str.length - 1; 
  while (n < m) {

    var temp = str[n];
    var strArray = str.split('' ); 
    strArray[n] = strArray[m];
    strArray[m] = temp;
    str = strArray.join(''); 
    n++;
    m--;
  }

  return str === str.toLowerCase(); 
}


module.exports = isPalindrome;
