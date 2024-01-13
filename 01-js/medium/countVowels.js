/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let noOfVowels = 0;
    const strLength = str.length;
    str = str.toLowerCase();

    for(let i = 0; i < strLength; i++){
      if(str[i] == 'a'){
        noOfVowels++;
      }
      else if(str[i] == 'e'){
        noOfVowels++;
      }
      else if(str[i] == 'i'){
        noOfVowels++;
      }
      else if(str[i] == 'o'){
        noOfVowels++;
      }
      else if(str[i] == 'u'){
        noOfVowels++;
      }
    }
    return noOfVowels;
}

module.exports = countVowels;