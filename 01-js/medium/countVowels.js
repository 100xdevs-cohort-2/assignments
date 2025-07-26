/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let numberOfVowels = 0;
    if(str.length==0)
      return numberOfVowels;

    let newStringArray = str.toLowerCase().split('');
    for(let itr of newStringArray)
    {
        if(itr == 'a' || itr == 'e' || itr == 'i' || itr == 'o' || itr == 'u'){
            numberOfVowels++;
        }
    }

    return numberOfVowels;
}

module.exports = countVowels;