/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  //For removing spaces and punctuation marks
  const Newstr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  const len = Newstr.length;
  let st=0;
  let end= len-1;

  while(st<=end){
    if(Newstr[st].toLowerCase() != Newstr[end].toLowerCase()){
      return false;
    }
    st++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
