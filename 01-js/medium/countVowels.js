/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    vowels = ['a', 'e', 'i', 'o', 'u'];
    let ans = 0
    for(let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();
        if(vowels.indexOf(ch) != -1) {
            ans += 1
        }
    }
    return ans;
}

module.exports = countVowels;