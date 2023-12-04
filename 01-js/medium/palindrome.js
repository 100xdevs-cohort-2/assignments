/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1=str.toLowerCase();
  let str2="";

  for(i of str1){
    if(i>='a' && i<='z')
    str2=str2+i;
  //console.log(str2);
  }
  let str3="";
    
  for(let i=str2.length-1; i>=0; i--)
    {
        str3= str3+ str2[i];
    }
  //console.log(str1,str2,str3);
    if(str2==str3){
        return true;
    }
    else{
        return false;
    }
}
//console.log(isPalindrome('race car'));
module.exports = isPalindrome;
