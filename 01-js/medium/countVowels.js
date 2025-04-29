/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // to count vowels 
  let noofvows =0;
  // converting string into array for iteration and making it lowercase for case-sensitivity
   let arrified = str.toLowerCase().split("");
   // iterating over array 
   for(let i=0; i<arrified.length; i++){
    // checking if the string contains aeiou
    if(arrified[i]== "a" || arrified[i]=="e" ||arrified[i] =="i" ||arrified[i]== "o" || arrified[i]=="u"){
      // then add 1 to noofvows which was initiated with 0
      noofvows= noofvows + 1;
    }
   }
   // returning the no of vowels 
   return noofvows;
}

module.exports = countVowels;