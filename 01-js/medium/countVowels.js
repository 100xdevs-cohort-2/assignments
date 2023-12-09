/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    var s = new Set();
    s.add('a');
    s.add('e');
    s.add('i');
    s.add('o');
    s.add('u');
    var count = 0;
    str = str.toLowerCase().split('').join('');
    for( c of str){
      if(s.has(c))
      count+=1;
    }
    return count;
}

module.exports = countVowels;