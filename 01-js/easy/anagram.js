/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
   let a = str1.replace(/\s/g, '').toLowerCase()
   let b = str2.replace(/\s/g, '').toLowerCase()
  //  console.log(a)
  //  console.log(b)
   a = a.split('').sort().join('')
   b= b.split('').sort().join('')
   if (a.length !== b.length){
    return false
   }

   if( a===b){
    return true
   }
   return false




}

module.exports = isAnagram;
