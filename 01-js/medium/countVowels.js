/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    str = str.toLowerCase();
    // Your code here
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    if(str.trim() === ""){
      return 0
    }

    let counter = 0;
    for (let i = 0; i < vowels.length; i++) {
      for (let j = 0; j < str.length; j++) {
        if(str[j] === vowels[i]){
          counter++;
        }        
      }
    }
    return counter;
}


module.exports = countVowels;