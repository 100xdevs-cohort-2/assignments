/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    var lowerCase = str.toLowerCase();
    var ctr = 0;
    for(var i=0; i<lowerCase.length; i++){
      if(lowerCase[i] == "a" || lowerCase[i] == "e" || lowerCase[i] == "i" || lowerCase[i] == "o" || lowerCase[i] == "u"){
        ctr++;
      }
    }
    return ctr;
}

module.exports = countVowels;