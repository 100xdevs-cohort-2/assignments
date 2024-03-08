/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  var s = 0;
  var e = str.length - 1;
  const alphanumeric = /^[a-zA-Z0-9]+$/;
  if(str.length==1){
    return true;
  }
  while (s<=e) {
    while (!str[s].match(alphanumeric) && s<=e) {
      s++;
    }
    while (!str[e].match(alphanumeric) && s<=e) {
      e--;
    }
    if (str[s].toLowerCase() !== str[e].toLowerCase()) {
      return false;
    }

    s++;
    e--;
  }

  return true;
}

module.exports = isPalindrome;
