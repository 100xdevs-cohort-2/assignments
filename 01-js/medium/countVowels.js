/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    counter = 0;

let vowels = {'a':1,'e':2,'i':3,'o':4,'u':5,'A':6,'E':7,'I':8,'O':9,'U':10};

for(let i=0;i<str.length;i++){
    if(str[i] in vowels){
        counter+=1;
    }
}
    return counter;
}

module.exports = countVowels;