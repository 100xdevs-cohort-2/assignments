/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    for(let c of str){
        if(vowels.findIndex((e) => e === c) !== -1){
            count++;
        }
    }
    return count;
}

module.exports = countVowels;
