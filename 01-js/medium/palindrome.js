/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
 const a = str.split('');
 str = str.replaceAll(" ","");
 str = str.replaceAll("?","");
 str = str.replaceAll(",","");
 str = str.replaceAll("!","");
 str = str.replaceAll(".","");
  

 str1 = a.reverse().join('');
 str1 =str1.replaceAll(" ",""); 
 str1 = str1.replaceAll("?","");
 str1 = str1.replaceAll(",","");
 str1 = str1.replaceAll("!","");
 str1 = str1.replaceAll(".","");
 return str1 == str;
}
module.exports = isPalindrome;
