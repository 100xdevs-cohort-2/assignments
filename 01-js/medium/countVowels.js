/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let counter = 0;
    str = str.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(i in str){
      if(vowels.includes(str[i])){
        counter++;
      }
    }

    return counter;
}


module.exports = countVowels;