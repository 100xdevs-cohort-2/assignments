/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {


 
  const count =str.match(/[aeiou]/gi);
    if(count==null){
      console.log(0);
      return 0;
    }
  console.log(count)
  return count.length;
}
countVowels("")
module.exports = countVowels;