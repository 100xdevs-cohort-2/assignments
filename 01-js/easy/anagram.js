/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let temp=[...str2];
  if(str1.length !=str2.length)
   return false;
  else{
    for(let i of str1.toLowerCase()){
      let b=true;
       for (j of str2.toLowerCase()) {
         if (j === i) {
           b = false;
           break;
         }
       }
       if(b)
       return false;
    }
  }
  return true;
}

module.exports = isAnagram;
