/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
   //giving uniformity -> converting to lower case
   const clearStr1 = str1.replace(/[^a-zA-Z0-9]/g).toLowerCase()
   const clearStr2 = str2.replace(/[^a-zA-Z0-9]/g).toLowerCase()

   const sortedStr1 = clearStr1.split('').sort().join('')
   const sortedStr2 = clearStr2.split('').sort().join('')

   return sortedStr1 === sortedStr2
}

const word1 = "listen"
const word2 = "silent"
const result = isAnagram(word1,word2);
console.log(result);j


