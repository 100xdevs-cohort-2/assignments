/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  var str1 = str.toLowerCase();
  var count = 0;
  for(var i=0;i<str.length;i++){
    if('aeiou'.includes(str1[i])){
      count++;
    }
  }return count;
}

module.exports = countVowels;