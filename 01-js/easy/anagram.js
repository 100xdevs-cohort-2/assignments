/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(input1,input2){
  const cleanInput1 = input1.replace(/\s/g, '').toLowerCase();
  const cleanInput2 = input2.replace(/\s/g, '').toLowerCase();
  //console.log(cleanInput1.length);
  //console.log(cleanInput2.length);
  if(cleanInput1.length !== cleanInput2.length){
    return false;
  }
  const sortedInput1 = cleanInput1.split('').sort().join('');
  const sortedInput2 = cleanInput2.split('').sort().join('');

  return sortedInput1 === sortedInput2

}
module.exports = isAnagram;
