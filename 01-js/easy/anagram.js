/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let original  = str1.toLowerCase().split('').sort();
  let rearranged = str2.toLowerCase().split('').sort();
  let state = true;

  if(rearranged.length === original.length){;
    for (let i =0; i < rearranged.length; i++){
      if( original[i] != rearranged[i]){
        state = false
      }
      else{
        state = true
      }
    }
  }
  else{
    state = false
  }

  

  return state
  
}


module.exports = isAnagram;
