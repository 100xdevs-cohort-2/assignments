/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let newString = '';
  for(const s of str) {
    const ch = s.toLowerCase();
    if((ch >= 'a' && ch <= 'z')) {
      newString += ch;
    }
  } 
  
  let i = 0, j = newString.length - 1;
  while(i <= j) {
    const ch1 = newString.charAt(i);
    const ch2 = newString.charAt(j);
    if(ch1 !== ch2) return false;
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
