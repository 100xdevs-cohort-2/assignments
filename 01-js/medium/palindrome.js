/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // formating the string
  str = str.replace(/[^a-zA-Z0-9]/g, "");
	str = str.replace(/\s/g, "");
  str = str.toLowerCase();
  
  // logic to check palindrome
  let start = 0;
  let end = str.length - 1;
  let isPalindrome = true;

  while(start < end) {
    if(str[start].toLowerCase() !== str[end].toLowerCase()) {
      isPalindrome = false;
      break;
    }
    start++;
    end--;
  }

  return isPalindrome;
}

module.exports = isPalindrome;
