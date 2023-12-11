/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let len = str.length;
    let numVovels = 0;
    while(len--){
      if(str[len-1] == 'a' || str[len-1] == "e" || str[len-1] == 'i' || str[len-1] == 'o' || str[len-1] == 'u') numVovels++;
    }
    return numVovels;
}

module.exports = countVowels;