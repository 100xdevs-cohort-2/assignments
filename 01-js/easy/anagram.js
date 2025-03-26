/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
// both string are alredy defined in function so we have to sort these strings
  str1=sortString(str1.tolowercase()); // decalred a function to sort characters of strings
  str2=sortString(str2.tolowercase());
  if(str1==str2){
    return true;
  }
  else{
    return false;
  } 
function sortString(str){
  let charArray=str.split(''); // split function splits all characters in form of array
  charArray.sort();// noe array of characters has been sorted
  let ans=charArray.join(''); // all chracters rejoined to form new string
  retrun ans;
}  

module.exports = isAnagram;
