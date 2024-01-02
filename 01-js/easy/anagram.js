/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(orStr1, orStr2) {

  let str1 = orStr1.toLowerCase();
  let str2 = orStr2.toLowerCase();

  let myMap1 = new Array(256).fill(0);
  let myMap2 = new Array(256).fill(0);

  for(let i = 0; i < str1.length; i++){
    let code = str1[i].charCodeAt(0);
    myMap1[code]++;
  }

  for(let i = 0; i < str2.length; i++){
    let code = str2[i].charCodeAt(0);
    myMap2[code]++;
  }

  let i = 0;

  while(i < 256){
    if(myMap1[i] !== myMap2[i]){
      return false;
    }
    i++;
  }

  return true;

}

module.exports = isAnagram;
