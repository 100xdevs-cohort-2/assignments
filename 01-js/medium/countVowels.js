/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    // str = str.toLowerCase();
    let count  =0 ;
    // const vowels = ['a','e','i','o','u']
    const vowels = 'aeiouAEIOU';
    for (let i =0;i<str.length;i++){
      // if(str[i] == 'a'||str[i] == 'e'||str[i] == 'i'||str[i] == 'o'||str[i] == 'u'){
      //   count += 1
      // }

        if(vowels.includes(str[i])){
          count+=1;
        }
    }
    return count
}

module.exports = countVowels;