/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  newstr = str.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "").toLowerCase();
  console.log(newstr);
  
  const n = newstr.length;
  let i=0, j=n-1;
  while(i<=j){
    if(newstr[i]!=newstr[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
