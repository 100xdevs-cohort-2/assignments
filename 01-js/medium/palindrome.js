/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let n = str.length;
  let i = 0, j = str.length - 1;
  str = str.toLowerCase();
 while(i < j) {
  while(!(/^[a-zA-Z]+$/.test(str[i])))
  i++;
  while(!(/^[a-zA-Z]+$/.test(str[j])))
  j--;

  if(str[i] != str[j])
  return false;
 i++;
 j--;
 }
  return true;
}

module.exports = isPalindrome;