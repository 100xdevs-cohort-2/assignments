/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here

    // declare a variable which store the total count of vowels
    let count = 0;

    // convert all character to small letter
    str = str.toLowerCase();

    // run a loop on str
    for(let i = 0; i < str.length; i++){
      if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
        count++;
      }
    }

    // return the ans
    return count;
}

module.exports = countVowels;