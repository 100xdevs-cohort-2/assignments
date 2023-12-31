/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  const newStr1 = str1.toLowerCase().replace(/\s/g, '');
  const newStr2 = str2.toLowerCase().replace(/\s/g, '');

  if(newStr1.length !== newStr2.length){
    return false; // not an anagram
  }

  let str1Sort = newStr1.split("").sort().join("");
  let str2Sort = newStr2.split("").sort().join("");


  // checking for anagram

  if(str1Sort === str2Sort){
    return true; // anagram
  }else {
    return false; // not an anagram 
  }

}


let result = isAnagram("Abhinandan", "Abhidannan"); // true

console.log(result);


module.exports = isAnagram;
