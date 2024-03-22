/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let string = str.toLowerCase();
    let vowelsCount = 0;
    for(let i=0; i<string.length; i++){
        if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'){
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}

module.exports = countVowels;