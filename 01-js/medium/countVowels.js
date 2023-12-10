/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // str = str.toLowerCase()
  // vowels = ['a', 'e', 'i', 'o', 'u']
  // count = 0
  //   for(let i = 0;i<str.length;i++){
  //     for(let j=0;j<vowels.length;j++){
  //       if (str[i] === vowels[j]){
  //         count+=1
  //     } 
  //     }
  //   }
  // return count


  let count=0;
    for(let i=0;i<str.length;i++){
      if(["a","i","e","o","u"].includes(str[i].toLowerCase())){
        count+=1
      }
    }
    return count;
}

console.log(countVowels("Hello"))

module.exports = countVowels;