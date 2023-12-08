/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
 
  let str3= str1.toLowerCase();
  let str4= str2.toLowerCase();

  let charArr1= str3.split('');
  let charArr2= str4.split('');

  if(charArr1.length != charArr2.length){
    return false;
  }
else{

 
  charArr1.sort();
  charArr2.sort();

  for(let i=0; i<charArr1.length ; i++){
    if(
      charArr1[i] != charArr2[i]){
        return false;
      }

  }
}
return true;
}

module.exports = isAnagram;
