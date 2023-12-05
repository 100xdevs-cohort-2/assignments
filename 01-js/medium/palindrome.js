/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
      
      if(str==null)  return false;
      
      str = str.toLowerCase();
      let left = 0
      let right = str.length - 1;
      
      while(left < right){
          
          while(left < right && !((str.charAt(left) >= 'a' && str.charAt(left) <= 'z') || (str.charAt(left) >= '0' && str.charAt(left) <= '9'))){
              left++;
          }
          
          while(left < right && !((str.charAt(right) >= 'a' && str.charAt(right) <= 'z') || (str.charAt(right) >= '0' && str.charAt(right) <= '9'))){
              right--;
          }
         
          if(str.charAt(left) != str.charAt(right)){
              return false;
          }
         
          left++;
          right--;
      }
      
      return true;
    }

module.exports = isPalindrome;
