/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  //remove all the white space and special character from the string
  str = str.replace(/[^\w\s]/gi, '').replace(/\s/g, '').toLowerCase();

  // console.log("str = ", str)
  
  let s = 0, e = str.length-1;
  while(s<=e){
    if(str[s] !== str[e]) return false;
    s++;
    e--;
  }

  return true;
}

// isPalindrome('Able, was I ere I saw Elba!')
// isPalindrome('Eva, can I see bees in a cave?')

module.exports = isPalindrome;
