/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase();
     var arr = str.split(""); 
     return arr.reduce((count,ar)=>
     {
       if(ar =='i'|| ar=='o'||ar=='u'||ar=='a'||ar=='e')
       {
         return ++count;
       }
       else
       {
         return count;
       }

     },0)
    // Your code here
}
 
module.exports = countVowels;