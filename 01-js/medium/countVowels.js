/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowels = 0;
    str = str.toLowerCase();
    for (letter of str){
      if(['a' , 'e', 'i' , 'o' , 'u' ].indexOf(letter)>-1) vowels++;
    }
    return vowels;
}

module.exports = countVowels;