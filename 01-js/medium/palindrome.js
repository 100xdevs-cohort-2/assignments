/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  console.log(str.charCodeAt(str.length - 1));
  if(str.length > 0 && (str.charCodeAt(str.length - 1) > 122 || str.charCodeAt(str.length - 1) < 97 )){
    str=str.substring(0,str.length - 1);
  }
  str = str.replaceAll(",","");
  str = str.replaceAll(".","");
  str = str.replaceAll(' ','');
  console.log(str);
  for(var i=0;i<str.length/2;i++){
    if(str[i]!=str[str.length - 1 -i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
