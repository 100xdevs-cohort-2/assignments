/*
  Implement a function `countVowels` that takes a string as an argument 
  and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let strArray = str.toLowerCase().split("");
    console.log(strArray);
    let count = 0;
    for (let letter = 0 ; letter < strArray.length ; letter++){
      if(strArray[letter] == "a" || strArray[letter] == "e" || strArray[letter] == "i" || strArray[letter] == "o" || strArray[letter] == "u"){
        count++;
      }
    }
    return count;
}
module.exports = countVowels;