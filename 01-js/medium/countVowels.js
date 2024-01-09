/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let splittedString = str.split("");

    const comp = ["a","e","i","o","u","A","E","I","O","U"]
    let count=0;
    
     for (let i = 0; i < comp.length; i++) {
      
        for (let j = 0; j < splittedString.length; j++) {
        
        if (comp[i] === splittedString[j]){
          count++;
         }
        
      }
      
     }
   
   return count;
}

module.exports = countVowels;