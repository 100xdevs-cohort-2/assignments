/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function isVowel(chr){
  if (chr=='a' || chr=='e' || chr=='i' || chr=='o' || chr=='u'){
    return true;
  }
  return false;
}
function countVowels(str) {
    // Your code here
    let s1=str.toLowerCase()
    let vow="aeiou";
    let count=0
    let n=str.length;
    for(let i=0;i<n;i++){
      if(isVowel(s1[i])){
        count+=1;
      }
    }
    return count
}

module.exports = countVowels;
