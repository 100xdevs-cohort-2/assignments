/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let ans=0;
    for(let i=0;i<str.length;i++){
         if(str[i]===' ')continue;
         let temp=str[i];
         if(temp=='a'||temp=='e'||temp=='i'||temp=='o'||temp=='u'||temp=='A'||temp=='E'||temp=='I'||temp=='O'||temp=='U'){
            ans++;
         }
    }
    return ans;
}

module.exports = countVowels;