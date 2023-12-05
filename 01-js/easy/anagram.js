/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
// METHIOD-1
function isAnagram(str1, str2) {
  const cleanedStr1=str1.replace(/ /g,'').toLowerCase();
  const cleanedStr2=str1.replace(/ /g,'').toLowerCase();

  if (cleanedStr1.length != cleanedStr2.length){
    return false;
  }
  const sortedStr1=cleanedStr1.split('').sort().join('');
  const sortedStr2=cleanedStr2.split('').sort().join('');

  if (sortedStr1 === sortedStr2){
    return true;
}

// METHOD-2
// we can use obj and store the frequeny of the char or we can use set ds 


// Test the function
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world'));   // false
console.log(isAnagram('Debit card', 'Bad credit')); // true
module.exports = isAnagram;
