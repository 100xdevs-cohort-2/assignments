/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if (str1.length != str2.length)
      return false ; 
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let characterObject = {};
    for(let character of str1){
      if(!characterObject[character]){
        characterObject[character] = 1;
      }else{
        characterObject[character] ++;
      }
    }
    for(let character of str2){
      if(!characterObject[character]) return false;
      characterObject[character] --;
    }
    Object.values(characterObject).every((number)=> number == 0);
    return true;
}

module.exports = isAnagram;
