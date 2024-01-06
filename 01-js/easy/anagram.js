/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
//
function isAnagram(str1, str2) {
  const arr1 = Array.from(str1.toLowerCase()).sort(); 
  const arr2= Array.from(str2.toLowerCase()).sort(); 
  let f=1; 
  arr1.forEach((item,i)=>
  {
   if(item !== arr2[i])
   f=0; 
  })
  return Boolean(f); 
}

module.exports = isAnagram;

