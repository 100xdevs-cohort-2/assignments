/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let sl1 = str1.length;
  let sl2 = str2.length;

  if(sl1 !== sl2){
    return false;
  }

  let arr1 = str1.toLowerCase().split('');
  let arr2 = str2.toLowerCase().split('');

  arr1.sort();
  arr2.sort();
  for(let i=0;i<sl1;i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;

}

module.exports = isAnagram;
