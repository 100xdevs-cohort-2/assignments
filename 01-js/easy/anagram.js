/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let n = str1.length;
  let m = str2.length;
  if(n!=m)return false;
  let count = {};
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  // console.log(str1, str2)
  for(let i=0;i<n;i++){
    count[str1[i]] = (count[str1[i]] || 0) + 1;
  }
  // for(let key in count){
  //   console.log(key, count[key])
  // }
  for(let i=0;i<m;i++){
    count[str2[i]] = (count[str2[i]] || 0) - 1;
  }
  // for(let key in count){
  //   console.log(key, count[key])
  // }
  for(let key in count){
    if(count[key] != 0){
      return false;
    }
  }
  return true;
}
// isAnagram('Debit Card', 'Bad Credit')

module.exports = isAnagram;
