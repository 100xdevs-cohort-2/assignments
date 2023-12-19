/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const charMap1 = {};

  for(const char of str1.toLowerCase()){
    charMap1[char] = (charMap1[char] || 0 )+1;
  }

  const charMap2 = {};

  for(const char of str2.toLowerCase()){
    charMap2[char] = (charMap2[char] || 0 )+1;
  }


  const keys1=  Object.keys(charMap1);
  const keys2 = Object.keys(charMap2);

  if(keys1.length != keys2.length){
    return false;
  }

  for(const key of keys1){
    if(charMap1[key] != charMap2[key]){
      return false;
    }


  }

  return true;

}


//another solun
// const lengthStr1 = str1.length;
//   const lengthStr2 = str2.length;

//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();

//   if(str1.length != str2.length){
//     return false;
//   }

//   const myObject = {};

//   for(let i = 0;i<lengthStr1;i++){
//     if(str1[i] in myObject){
//       myObject[str1[i]] += 1;
//     }
//     else{
//       myObject[str1[i]] = 1;
//     }
//   }

//   for(let i = 0 ;i<lengthStr2;i++){
//     if(str2[i] in myObject){
//       myObject[str2[i]] -= 1;
//     }
//     else return false;
//   }

//   for(let key in myObject){
//   if(myObject[key]!= 0 ){
//     return false;
//   }
// }
//   return true;


module.exports = isAnagram;
