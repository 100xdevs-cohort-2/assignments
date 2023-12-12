/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let stri1 = str1.toUpperCase();
  let stri2 = str2.toUpperCase();
  if (str1.length != str2.length) {
    return false;
  } 
  
  else {
    for (let i = 0; i < str1.length; i++) {
       let t=1;
      for(let j = 0; j < str2.length; j++) {
      if (stri1[i] === stri2[j]) {
        t=1;
        break;
      }
        else{
          t=0;
        }
    }
      if(t==0)
      {
        return false;
      }
    
  }
    return true;
}
}



module.exports = isAnagram;
