/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  return sort_str(str1)===sort_str(str2)
}
function sort_str(str){
  str = str.toLowerCase()
  let sorted_str = "0"
  for(let i=0;i<str.length;i++){
      for(let j=0;j<sorted_str.length;j++){
          if(sorted_str[j]>str[i]){
              sorted_str = sorted_str.substring(0,j)+str[i]+sorted_str.substring(j)
              break
          }
          if(j==sorted_str.length-1) {
              sorted_str+= str[i]
              break
          }
      }
  }
  return sorted_str
}

module.exports = isAnagram;
